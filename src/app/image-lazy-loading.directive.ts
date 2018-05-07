import { Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';

@Directive({ selector: '[appImageLazyLoading]' })
export class ImageLazyLoadingDirective implements OnInit {
  private loadingCssClass = 'img-lazy-loading';
  private loadedCssClass = 'img-lazy-loaded';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.load();
  }

  @Input('appImageLazyLoading') url: string;

  @HostListener('load') onLoad() {
    const classList = this.el.nativeElement.classList;
    classList.remove(this.loadingCssClass);
    classList.add(this.loadedCssClass);
  }

  private load() {
    this.el.nativeElement.classList.add(this.loadingCssClass);
    this.el.nativeElement.setAttribute('src', this.url);
  }
}
