from django.urls import path, include
from rest_framework import routers
from . import views
from .views import *

router = routers.DefaultRouter()
router.register(r'users', ProfileViewSet)  # 회원 정보 CRUD, list detail 모두 조회 가능
router.register(r'posts', PostViewSet)


urlpatterns = [
    # path('users/<int:pk>/posts/<int:post_pk>', views.ProfilePostDetail.as_view()),
    path('', include(router.urls)),
]
