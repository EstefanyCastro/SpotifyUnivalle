import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteSongsService } from 'src/app/services/favorite-song.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artista: any;
  topTracks: any;
  songId: any;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService,
    private favoriteSong: FavoriteSongsService
  ) {
    this.route.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(artista => { this.artista = artista })
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(topTracks => { this.topTracks = topTracks })
  }

  addToFavorites(songId: string) {
    this.favoriteSong.addSong(songId);
  }

  INTENTO(songId: string) {
    console.log('Canción agregada como favorita:', songId);
  }

  addToFavoritesMongo(
    songId: string,
    songName: string,
    artistName: string,
    imageUrl: string,
    uri: string
  ) {
    console.log('Entrando a addToFavoritesMongo');
    console.log('Datos a enviar:', songId, songName, artistName, imageUrl, uri);
  
    this.favoriteSong.addSongToFavorites(songId, songName, artistName, imageUrl, uri)
      .subscribe(
        (response) => {
          console.log('Canción agregada como favorita:', response);
        },
        (error) => {
          console.error('Error al guardar la canción como favorita:', error);
        }
      );
  }
  
}
