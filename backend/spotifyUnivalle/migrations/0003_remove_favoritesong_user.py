# Generated by Django 4.1.10 on 2023-07-08 04:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spotifyUnivalle', '0002_favoritesong_delete_cancion'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favoritesong',
            name='user',
        ),
    ]
