import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { ImageLazyLoadingDirective } from './image-lazy-loading.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    ImageLazyLoadingDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
