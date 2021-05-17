from django.contrib import admin
from .models import Post, Profile, School, Area, Like

admin.site.register(Profile)
admin.site.register(Post)
admin.site.register(School)
admin.site.register(Area)
admin.site.register(Like)

