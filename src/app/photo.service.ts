import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Photo } from './photo';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  allPhotosLoaded = false;

  private start = 0;
  private limit = 9;

  constructor(private http: HttpClient) { }

  getPhotos (): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(this.getPhotosUrl())
      .pipe(
        tap(photos => {
          if (photos.length < this.limit) {
            this.allPhotosLoaded = true;

            return;
          }

          this.start +=  photos.length;
        }),
        catchError(() => {
          alert('Не удалось загрузить фотографии!');

          return of([]);
        })
      );
  }

  private getPhotosUrl() {
    return `https://jsonplaceholder.typicode.com/photos?_start=${this.start}&_limit=${this.limit}`;
  }
}
