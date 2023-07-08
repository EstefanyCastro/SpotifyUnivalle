import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { FavoriteSongsService } from 'src/app/services/favorite-song.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  favoriteSongs: string[];
  favoriteSongsDetails: any[] = [];
  profileJson: string = null;

  constructor(
    public auth: AuthService,
    private favoriteSong: FavoriteSongsService,
    private spotify: SpotifyService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe((profile) => {
      this.profileJson = JSON.stringify(profile, null, 2);
    });

    this.favoriteSongs = this.favoriteSong.getFavoriteSongs();

    // Obtener los detalles de las canciones favoritas
    this.favoriteSongs.forEach((songId) => {
      this.spotify.getSongDetails(songId).subscribe((songDetails) => {
        this.favoriteSongsDetails.push(songDetails);
      });
    });
  }
}
