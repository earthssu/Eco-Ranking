from django_filters.rest_framework import FilterSet, filters
from .models import *


class PostFilter(FilterSet):
    text = filters.CharFilter(field_name='text', lookup_expr='icontains')

    class Meta:
        model = Post
        fields = ['writer', 'category', 'text']


class ProfileFilter(FilterSet):
    class Meta:
        model = Profile
        fields = ['user']

