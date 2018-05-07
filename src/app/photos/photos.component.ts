import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[];
  selectedPhoto: Photo;

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService
      .getPhotos()
      .subscribe(photos => {
        if (this.photos === undefined) {
          this.photos = photos;

          return;
        }

        Array.prototype.push.apply(this.photos, photos);
      });
  }

  onSelect(photo: Photo): void {
    this.selectedPhoto = photo;
  }

  onUnselect(): void {
    this.selectedPhoto = undefined;
  }
}
