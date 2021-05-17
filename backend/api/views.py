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


class ProfilePostDetail(APIView):
    def get(self, request, pk, post_pk):
        profile = get_object_or_404(Profile, pk=pk)
        post = profile.posts.get(pk=post_pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk, post_pk):
        profile = get_object_or_404(Profile, pk=pk)
        post = profile.posts.get(pk=post_pk)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, post_pk):
        profile = get_object_or_404(Profile, pk=pk)
        post = profile.posts.get(pk=post_pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = PostFilter

