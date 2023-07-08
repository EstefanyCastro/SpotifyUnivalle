from django.db import models

class FavoriteSong(models.Model):
    song_id = models.CharField(max_length=100)
    song_name = models.CharField(max_length=100)
    artist_name = models.CharField(max_length=100)
    image_url = models.URLField()
    uri = models.CharField(max_length=200)

    def __str__(self):
        return self.song_name
