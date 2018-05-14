import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { ImageLazyLoadingDirective } from './image-lazy-loading.directive';
import { SecureUrlPipe } from './secure-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    ImageLazyLoadingDirective,
    SecureUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
