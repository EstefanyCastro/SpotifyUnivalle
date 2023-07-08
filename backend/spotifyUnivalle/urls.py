from django.urls import path
from .views import *

urlpatterns = [
    # Otras rutas de la aplicación
    path('add/', add_favorite_song, name='add_favorite_song'),
]
