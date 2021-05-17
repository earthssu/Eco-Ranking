from rest_framework import serializers
from .models import School, Area, Profile, Post, Like


class SchoolSerializer(serializers.ModelSerializer):

    class Meta:
        model = School
        fields = ['name', 'score']


class AreaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Area
        fields = ['name', 'score']


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Like
        fields = ['liker', 'post']


class PostSerializer(serializers.ModelSerializer):
    writer_nickname = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'writer_nickname', 'writer', 'category', 'text', 'likes']

    def get_writer_nickname(self, obj):
        return obj.writer.nickname


class ProfileSerializer(serializers.ModelSerializer):
    likes = LikeSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'nickname', 'school', 'area', 'score', 'likes']
