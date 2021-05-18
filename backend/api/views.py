from datetime import date, timedelta
import json
import urllib
from pandas.io.json import json_normalize
from django.http import Http404
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


class PollutionList(APIView):
    def get(self, request):
        gu_name_list = Area.objects.values_list('name', flat=True)
        gu = []
        pm10 = []
        pm25 = []
        o3 = []
        no2 = []
        co = []
        so2 = []
        gu_score = []
        for i in range(0, 25):
            gu = gu_name_list[i]
            # if gu[i] == df['MSRSTE_NM'][i]:
            pm10 = round(int(df['PM10'][i]), -1)
            pm25 = round(int(df['PM25'][i]), -1)
            o3 = round(int(df['O3'][i] * 1000), -1)
            no2 = round(int(df['NO2'][i] * 1000), -1)
            co = int(df['CO'][i] * 100)
            so2 = int(df['SO2'][i] * 10000)
            gu_score = int((pm10 + pm25 + o3 + no2 + co + so2) / 10)
            print(pm10, pm25, o3, no2, co, so2, gu_score)
        return Response(gu_score)


class SchoolRankList(APIView):
    def get(self, request):
        school = School.objects.all()
        students = Profile.objects.all()
        score = 0
        for i in range(0, Profile.objects.values().count()):
            if students[i].school.name == school[i].name:
                school[i].score += students[i].score()
                print(school[i].score)
                return Response(school[i].score)

# School.objects.all()[0].students.all()[0].score()