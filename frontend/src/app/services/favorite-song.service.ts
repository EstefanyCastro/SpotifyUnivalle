import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteSongsService {
  private favoriteSongs: string[] = [];

  constructor(private http: HttpClient) { }

  addSong(songId: string) {
    this.favoriteSongs.push(songId);
  }

  getFavoriteSongs() {
    return this.favoriteSongs;
  }

  addSongToFavorites(songId: string, songName: string, artistName: string, imageUrl: string, uri: string) {
    const favoriteData = {
      song_id: songId,
      song_name: songName,
      artist_name: artistName,
      image_url: imageUrl,
      uri: uri
    };

    console.log('Datos a enviar:', favoriteData); // Agregar este console log


    return this.http.post('http://localhost:8000/api/add/', favoriteData)
  }
}
