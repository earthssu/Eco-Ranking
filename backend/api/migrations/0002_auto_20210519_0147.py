# Generated by Django 3.1.5 on 2021-05-18 16:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='area',
            name='score',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='score',
        ),
        migrations.RemoveField(
            model_name='school',
            name='score',
        ),
    ]