from django.db import transaction
from rest_framework import serializers
from .models import School, Area, Profile, Post, Like
from dj_rest_auth.registration.serializers import RegisterSerializer


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


class CustomRegisterSerializer(RegisterSerializer):
    school = serializers.ChoiceField(choices=School.objects.all())
    area = serializers.ChoiceField(choices=Area.objects.all())
    nickname = serializers.CharField(max_length=50)

    @transaction.atomic
    def save(self, request):
        user = super().save(request)
        school = self.data.get('school')
        area = self.data.get('area')
        nickname = self.data.get('nickname')
        profile = Profile(user=user, nickname=nickname, school=school, area=area)
        user.save()
        profile.save()
        return user
