from django.db import models
from django.contrib.auth.models import User


class Base(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class School(Base):
    name = models.CharField(max_length=20)
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Area(Base):
    name = models.CharField(max_length=10)
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Profile(Base):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    nickname = models.CharField(max_length=50, unique=True)
    school = models.ForeignKey(School, null=True, related_name='students', on_delete=models.SET_NULL)
    area = models.ForeignKey(Area, related_name='users', on_delete=models.CASCADE)
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.nickname


class Post(Base):
    CATEGORY_CHOICES = [
        ('대중교통 이용', '대중교통 이용'),
        ('분리수거', '분리수거'),
        ('친환경 제품 이용', '친환경 제품 이용'),
        ('기타', '기타'),
    ]
    writer = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='posts')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    text = models.TextField(null=True)

    def __str__(self):
        return '{} : {}'.format(self.writer, self.text)


class Like(Base):
    liker = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='liked_posts')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes')

    def __str__(self):
        return '{} -> {}'.format(self.liker, self.post)
