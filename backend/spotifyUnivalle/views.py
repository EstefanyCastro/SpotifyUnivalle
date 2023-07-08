from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *

@csrf_exempt
def add_favorite_song(request):
    if request.method == 'POST':
        song_id = request.POST.get('song_id')
        song_name = request.POST.get('song_name')
        artist_name = request.POST.get('artist_name')
        image_url = request.POST.get('image_url')
        uri = request.POST.get('uri')

        favorite_song = FavoriteSong(
            song_id=song_id,
            song_name=song_name,
            artist_name=artist_name,
            image_url=image_url,
            uri=uri
        )
        favorite_song.save()

        return JsonResponse({'success': True})
    else:
        return JsonResponse({'error': 'Invalid request method'})
