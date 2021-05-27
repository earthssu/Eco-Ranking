from django.urls import path, include
from rest_framework import routers
from . import views
from .views import *
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register(r'users', ProfileViewSet)  # 회원 정보 CRUD, list detail 모두 조회 가능
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('users/', views.ProfileList.as_view()),
    # path('users/<str:username>', views.ProfileDetail.as_view()),
    # path('auth/', obtain_auth_token),
    path('data/', views.DataList.as_view()),
    path('pollution/', views.PollutionList.as_view()),
    path('pollution/<int:pk>', views.PollutionDetail.as_view()),
    path('rank/schools', views.SchoolRankList.as_view()),
    path('rank/area', views.AreaRankList.as_view()),
    path('schools/', views.SchoolRegister.as_view()),
]
#