from django.contrib import admin
from .models import Post, Profile, School, Area, Like


class ProfileAdmin(admin.ModelAdmin):
    list_display = ['nickname', 'school', 'area', 'score']


class SchoolAdmin(admin.ModelAdmin):
    list_display = ['name', 'studentsScoreSum']


class AreaAdmin(admin.ModelAdmin):
    list_display = ['name', 'usersScoreSum']


admin.site.register(Profile, ProfileAdmin)
admin.site.register(Post)
admin.site.register(School, SchoolAdmin)
admin.site.register(Area, AreaAdmin)
admin.site.register(Like)

