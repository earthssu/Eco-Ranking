from django.http import Http404
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.decorators import action
from .filters import ProfileFilter, PostFilter
from .models import *
from .serializers import *
from django_filters import rest_framework as filters
from rest_framework.response import Response
from rest_framework.views import APIView

#
gu, pm10, pm25, o3, no2, co, so2, gu_score, dic = [], [], [], [], [], [], [], [], []
for i in range(0, 25):
    gu.append(Area.objects.all()[i].name)
    pm10.append(df['PM10'][i])
    pm25.append(df['PM25'][i])
    o3.append(df['O3'][i])
    no2.append(df['NO2'][i])
    co.append(df['CO'][i])
    so2.append(df['SO2'][i])
    dic = list(zip(gu, pm10, pm25, o3, no2, co, so2))


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    # filterset_class = ProfileFilter
    lookup_field = 'username'

    @action(detail=True, methods=['get'])
    def posts(self, request, username):
        user = get_object_or_404(User, username=username)  # pk 를 username로 바꿔야 함.
        posts = user.posts.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    @action(methods=['post'], detail=True)
    def posting(self, request, username):
        user = get_object_or_404(User, username=username)
        post = Post.objects.create(writer=user, text=request.data['text'], category=request.data['category'])
        serializer = PostSerializer(post, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['get'])
    def score(self, request, username):
        user = get_object_or_404(User, username=username)  # pk 를 username로 바꿔야 함.
        score = user.profile.score()
        serializer = PostSerializer(score, many=True)
        return Response(score)


# class ProfileList(APIView):
#     def get(self, request, format=None):
#         profiles = Profile.objects.all()
#         serializer = ProfileSerializer(profiles, many=True)
#         return Response(serializer.data)
#
#     def post(self, request, format=None):
#         serializer = ProfileSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# class ProfileDetail(APIView):
#     def get_object(self, username):
#         try:
#             return User.objects.get(username=username)
#         except User.DoesNotExist:
#             raise Http404
#
#     def get(self, request, username, format=None):
#         user = self.get_object(username)
#         profile = Profile.objects.get(user=user)
#         serializer = ProfileSerializer(profile)
#         return Response(serializer.data)
#
#     def put(self, request, username, format=None):
#         user = self.get_object(username)
#         profile = Profile.objects.get(user=user)
#         serializer = ProfileSerializer(profile, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, username, format=None):
#         user = self.get_object(username)
#         profile = Profile.objects.get(user=user)
#         profile.delete()
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
        return Response(dic)


class PollutionDetail(APIView):
    def get(self, request, pk):
        return Response(dic[pk-1])


class SchoolRankList(APIView):
    def get(self, request):
        school = School.objects.all()
        sort = sorted(school, key=lambda a: a.score, reverse=True)
        serializers = SchoolSerializer(sort, many=True)
        return Response(serializers.data)


class AreaRankList(APIView):
    def get(self, request):
        area = Area.objects.all()
        sort = sorted(area, key=lambda a: a.score, reverse=True)
        serializers = SchoolSerializer(sort, many=True)
        return Response(serializers.data)


# 리스트
# class SchoolRankList(APIView):
#     def get(self, request):
#         score_list, school_list, area_list, merged_list, final_list, final_score = [], [], [], [], [], []
#         dic = pollutionLevel()
#
#         for i in range(0, School.objects.all().count()):
#             school_list.append(School.objects.all()[i].name)
#             score_list.append(School.objects.all()[i].studentsScoreSum())
#             area_list.append(School.objects.all()[i].area.name)
#         merged_list = list(zip(school_list, area_list, score_list))
#
#         for i in range(0, School.objects.all().count()):
#             for j in range(0, 25):
#                 if merged_list[i][1] == dic[j][0]:
#                     final_score.append(School.objects.all()[i].studentsScoreSum() - dic[j][1])
#                     if final_score[i] < 0:
#                         final_score[i] = 0
#         final_list = sorted(list(zip(school_list, final_score)), key=lambda x: x[1], reverse=True)
#         return Response(final_list)


# class AreaRankList(APIView):
#     def get(self, request):
#         score_list, area_list, merged_list, final_list, final_score = [], [], [], [], []
#         dic = pollutionLevel()
#
#         for i in range(0, Area.objects.all().count()):
#             area_list.append(Area.objects.all()[i].name)
#             score_list.append(Area.objects.all()[i].usersScoreSum())
#         merged_list = list(zip(area_list, score_list))
#
#         for i in range(0, 25):
#             for j in range(0, 25):
#                 if merged_list[i][0] == dic[j][0]:
#                     final_score.append(Area.objects.all()[j].usersScoreSum() - dic[j][1])
#                     if final_score[i] < 0:
#                         final_score[i] = 0
#         final_list = sorted(list(zip(area_list, final_score)), key=lambda x: x[1], reverse=True)
#         return Response(final_list)
