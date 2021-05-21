from django.contrib import admin
from .models import Post, Profile, School, Area, Like


class ProfileAdmin(admin.ModelAdmin):
    list_display = ['school', 'area', 'score']


class SchoolAdmin(admin.ModelAdmin):
    list_display = ['name', 'area', 'studentsScoreSum', 'pollution', 'finalScore']


class AreaAdmin(admin.ModelAdmin):
    list_display = ['name', 'usersScoreSum', 'pollution', 'finalScore']


class PostAdmin(admin.ModelAdmin):
    list_display = ['writer', 'category', 'text', 'created_at']


admin.site.register(Profile, ProfileAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(School, SchoolAdmin)
admin.site.register(Area, AreaAdmin)
admin.site.register(Like)

#