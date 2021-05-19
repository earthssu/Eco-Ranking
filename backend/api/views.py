from datetime import date, timedelta
import json
import urllib
from django.views.decorators.csrf import csrf_exempt
from pandas.io.json import json_normalize
from django.http import Http404, JsonResponse, HttpResponse
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import action
from .filters import ProfileFilter, PostFilter
from .models import *
from .serializers import *
from django_filters import rest_framework as filters
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

yesterday = date.today() - timedelta(1)
date = yesterday.strftime("%Y%m%d")

url = 'http://openapi.seoul.go.kr:8088/4b744e724f6a756c37387a416c5149/json/DailyAverageCityAir/1/25/{}'.format(date)
response = urllib.request.urlopen(url)
json_str = response.read().decode("utf-8")
json_object = json.loads(json_str)
df = json_normalize(json_object['DailyAverageCityAir']['row'])


# 지역 오염도 계산해서 리스트로 반환 ex) ["중구", 18]
def pollutionLevel():
    gu, pm10, pm25, o3, no2, co, so2, gu_score, dic = [], [], [], [], [], [], [], [], []
    for i in range(0, 25):
        gu.append(Area.objects.all()[i].name)
        pm10.append(round(int(df['PM10'][i]), -1))
        pm25.append(round(int(df['PM25'][i]), -1))
        o3.append(round(int(df['O3'][i] * 1000), -1))
        no2.append(round(int(df['NO2'][i] * 1000), -1))
        co.append(int(df['CO'][i] * 100))
        so2.append(int(df['SO2'][i] * 10000))
        gu_score.append(int((pm10[i] + pm25[i] + o3[i] + no2[i] + co[i] + so2[i]) / 10))
        dic = list(zip(gu, gu_score))
    return dic


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProfileFilter

    @action(detail=True, methods=['get', 'post'])
    def posts(self, request, pk):
        profile = get_object_or_404(Profile, pk=pk)
        posts = profile.posts.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


# class ProfilePostDetail(APIView):
#     def get(self, request, pk, post_pk):
#         profile = get_object_or_404(Profile, pk=pk)
#         post = profile.posts.get(pk=post_pk)
#         serializer = PostSerializer(post)
#         return Response(serializer.data)
#
#     def put(self, request, pk, post_pk):
#         profile = get_object_or_404(Profile, pk=pk)
#         post = profile.posts.get(pk=post_pk)
#         serializer = PostSerializer(post, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, pk, post_pk):
#         profile = get_object_or_404(Profile, pk=pk)
#         post = profile.posts.get(pk=post_pk)
#         post.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = PostFilter


class DataList(APIView):
    def get(self, request):
        return Response(df)


# 딕셔너리
class PollutionList(APIView):
    def get(self, request):
        # gu_name_list = Area.objects.values_list('name', flat=True)
        dic = pollutionLevel()
        return Response(dic)


# 리스트
class SchoolRankList(APIView):
    def get(self, request):
        score_list, school_list, area_list, merged_list, final_list, final_score = [], [], [], [], [], []
        dic = pollutionLevel()

        for i in range(0, School.objects.all().count()):
            school_list.append(School.objects.all()[i].name)
            score_list.append(School.objects.all()[i].studentsScoreSum())
            area_list.append(School.objects.all()[i].area.name)
        merged_list = list(zip(school_list, area_list, score_list))

        for i in range(0, School.objects.all().count()):
            for j in range(0, 25):
                if merged_list[i][1] == dic[j][0]:
                    final_score.append(School.objects.all()[i].studentsScoreSum() - dic[j][1])
                    if final_score[i] < 0:
                        final_score[i] = 0
        final_list = sorted(list(zip(school_list, final_score)), key=lambda x: x[1], reverse=True)
        return Response(final_list)


class AreaRankList(APIView):
    def get(self, request):
        score_list, area_list, merged_list, final_list, final_score = [], [], [], [], []
        dic = pollutionLevel()

        for i in range(0, Area.objects.all().count()):
            area_list.append(Area.objects.all()[i].name)
            score_list.append(Area.objects.all()[i].usersScoreSum())
        merged_list = list(zip(area_list, score_list))

        for i in range(0, 25):
            for j in range(0, 25):
                if merged_list[i][0] == dic[j][0]:
                    final_score.append(Area.objects.all()[j].usersScoreSum() - dic[j][1])
                    if final_score[i] < 0:
                        final_score[i] = 0
        final_list = sorted(list(zip(area_list, final_score)), key=lambda x: x[1], reverse=True)
        return Response(final_list)
