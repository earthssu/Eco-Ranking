from django.urls import path
from . import views

# /register
# /login
# /users & /users/<int:pk>
# /rank/(schools or area)
# /users/<int:pk>/posts
# /users/<int:pk>/posts/<int:pk>
# posts

urlpatterns = [
    path('', views.index, name='test'),
]