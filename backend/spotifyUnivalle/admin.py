from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(FavoriteSong)
class UserAdmin(admin.ModelAdmin):
    pass