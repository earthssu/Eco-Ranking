import json
from datetime import datetime
from django.db import models
from django.db import transaction
from rest_framework import serializers
from .models import School, Area, Profile, Post, Like, User
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework.authtoken.models import Token

now = datetime.now()


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ['name', 'area', 'studentsScoreSum', 'pollution', 'finalScore']


class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ['name', 'usersScoreSum', 'pollution', 'finalScore']


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['liker', 'post']


class PostSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    school = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'username', 'school', 'category', 'text', 'likes', 'created_at']

    def get_username(self, obj):
        return obj.writer.username

    def get_school(self, obj):
        return obj.writer.profile.school.name


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    likes = LikeSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'username', 'school', 'area', 'score', 'likes']

    def get_username(self, obj):
        return obj.user.username


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class MyCustomTokenSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    class Meta:
        model = Token
        fields = ('key', 'username')

    def get_username(self, obj):
        return obj.user.username


class CustomRegisterSerializer(RegisterSerializer):
    school = serializers.ChoiceField(choices=School.objects.all())
    area = serializers.ChoiceField(choices=Area.objects.all())

    @transaction.atomic
    def save(self, request):
        user = super().save(request)
        school = self.data.get('school')
        area = self.data.get('area')
        profile = Profile(user=user, school=school, area=area)
        user.save()
        profile.save()
        return user
#