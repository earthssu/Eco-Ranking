from django.db import models
from django.contrib.auth.models import User
from datetime import date, timedelta
import json
import urllib.request
from pandas import json_normalize

date = (date.today() - timedelta(1)).strftime("%Y%m%d")

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


class Base(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        abstract = True


class Area(Base):
    name = models.CharField(max_length=10)

    # score = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    def usersScoreSum(self):
        score = 0
        for i in range(0, self.users.all().count()):
            score += self.users.all()[i].score()
        return score

    def pollution(self):
        pollution = 0
        dic = pollutionLevel()
        for i in range(0, 25):
            if dic[i][0] == self.name:
                pollution = dic[i][1]
        return pollution

    def finalScore(self):
        score = 0
        dic = pollutionLevel()
        for i in range(0, 25):
            if dic[i][0] == self.name:
                score = self.usersScoreSum() - dic[i][1]
                if score < 0:
                    score = 0
        return score

    score = property(finalScore)


class School(Base):
    name = models.CharField(max_length=20)
    area = models.ForeignKey(Area, related_name='schools', null=True, on_delete=models.SET_NULL)

    # score = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    def studentsScoreSum(self):
        score = 0
        for i in range(0, self.students.all().count()):
            score += self.students.all()[i].score()
        return score

    def pollution(self):
        pollution = 0
        dic = pollutionLevel()
        for i in range(0, School.objects.all().count()):
            for j in range(0, 25):
                if dic[j][0] == self.area.name:
                    pollution = dic[j][1]
        return pollution

    def finalScore(self):
        score = 0
        dic = pollutionLevel()
        for i in range(0, School.objects.all().count()):
            for j in range(0, 25):
                if dic[j][0] == self.area.name:
                    score = self.studentsScoreSum() - dic[j][1]
                    if score < 0:
                        score = 0
        return score

    score = property(finalScore)


class Profile(Base):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    school = models.ForeignKey(School, null=True, related_name='students', on_delete=models.SET_NULL)
    area = models.ForeignKey(Area, related_name='users', on_delete=models.CASCADE)

    # score = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username

    def score(self):
        return self.user.posts.values().count() * 10


class Post(Base):
    CATEGORY_CHOICES = [
        ('대중교통 이용', '대중교통 이용'),
        ('분리수거', '분리수거'),
        ('친환경 제품 이용', '친환경 제품 이용'),
        ('기타', '기타'),
    ]
    writer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    text = models.TextField(null=True)

    def __str__(self):
        return '{} : {}'.format(self.writer, self.text)


class Like(Base):
    liker = models.ForeignKey(User, on_delete=models.CASCADE, related_name='liked_posts')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes')

    def __str__(self):
        return '{} -> {}'.format(self.liker, self.post)
