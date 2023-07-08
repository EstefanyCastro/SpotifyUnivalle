import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {
  nuevasCanciones: any;

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data: any) => { this.nuevasCanciones = data });
  }
}
