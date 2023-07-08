import { TestBed } from '@angular/core/testing';
import { FavoriteSongsService } from './favorite-song.service';

describe('FavoriteSongService', () => {
  let service: FavoriteSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
