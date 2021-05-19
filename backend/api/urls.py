from django.urls import path, include
from rest_framework import routers
from . import views
from .views import *
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register(r'users', ProfileViewSet)  # 회원 정보 CRUD, list detail 모두 조회 가능
router.register(r'posts', PostViewSet)


urlpatterns = [
    # path('users/<int:pk>/posts/<int:post_pk>', views.ProfilePostDetail.as_view()),
    path('', include(router.urls)),
    path('auth/', obtain_auth_token),
    path('auth/register', views.RegisterView.as_view()),
    path('data/', views.DataList.as_view()),
    path('pollution/', views.PollutionList.as_view()),
    path('pollution/<int:pk>', views.PollutionDetail.as_view()),
    path('rank/schools', views.SchoolRankList.as_view()),
    path('rank/area', views.AreaRankList.as_view())
]
