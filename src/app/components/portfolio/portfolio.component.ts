import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @ViewChild('landing') landing: ElementRef | any;
  @ViewChild('gallery') gallery: ElementRef | any;
  @ViewChild('film') film: ElementRef | any;
  safeURL: SafeResourceUrl;
  videoURL = 'https://www.youtube.com/embed/IE5Q6n4cmys?vq=hd1080&rel=0';
  originalShown = false;
  reflectionShown = false;
  giInFocus = 0; // hovering over gallery item
  private elem: ElementRef | any;

  constructor(private router: Router, private renderer: Renderer2, private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    // @ts-ignore
    const parent: HTMLElement = document.getElementById('gallery');
    const galleryOffset = Math.round(window.pageYOffset - (this.gallery.nativeElement.offsetHeight / 4 - (0.11 * this.gallery.nativeElement.offsetHeight / 5)))
    console.log(galleryOffset)

    if (galleryOffset >= 0 && galleryOffset <= 2400) { // gallery section
      this.highlight('gallery-link', 'landing-link', 'film-link')
      this.giInFocus = this.checkWhichGalleryItem(galleryOffset)
      for (let i = 0; i < parent.children.length; i++) {
        this.renderer.setStyle(parent.children[i], 'position', 'fixed');
        this.renderer.setStyle(parent.children[i], 'top', '11vh');
        this.renderer.setStyle(parent.children[i], 'height', '89vh');
        this.renderer.setStyle(parent.children[i], 'left', ((i * 100) - (Math.round(galleryOffset/6))) +'%'); // the higher the divisor the slower the speed
      }
    } else if (galleryOffset > 2400) { // film player section
      this.highlight('film-link', 'landing-link', 'gallery-link')
      this.renderer.setStyle(parent.children[parent.children.length-1], 'left', '0');
      // this.renderer.setStyle(parent.children[parent.children.length-1], 'position', 'fixed');
      // let topOffset = 11-(Math.round((galleryOffset-2400)/6))
      // this.renderer.setStyle(parent.children[parent.children.length-1], 'top', topOffset + '%'); // (4 * 100)
    } else { // landing section
      this.highlight('landing-link', 'gallery-link', 'film-link')
      for (let i = 0; i < parent.children.length; i++) {
        this.renderer.setStyle(document.getElementById('landing'), 'visibility', 'visible');
        this.renderer.setStyle(parent.children[i], 'position', 'relative');
        this.renderer.removeStyle(parent.children[i], 'top');
        this.renderer.removeStyle(parent.children[i], 'left');
        this.renderer.setStyle(parent.children[i], 'height', '89vh');
      }
    }
  }

  hideTitle(hide: boolean) {
    if (hide) {
      this.renderer.setStyle(document.getElementById('landing'), 'visibility', 'hidden');
      this.renderer.setStyle(document.getElementById('title'), 'visibility', 'hidden');
    } else {
      this.renderer.setStyle(document.getElementById('landing'), 'visibility', 'visible');
      this.renderer.setStyle(document.getElementById('title'), 'visibility', 'visible');
    }
  }

  onScrollInto(element: Element): void {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  unedited(showOriginal : boolean) {
    if (this.giInFocus <= 0) return
    this.originalShown = !showOriginal
    // @ts-ignore
    let elements = document.getElementById('gallery-item-'+this.giInFocus).querySelectorAll('.original')
    for (let i = 0; i < elements.length; i++) {
      if(!this.originalShown) {
        this.renderer.setStyle(elements[i], 'opacity', '1');
      }
      else {
        this.renderer.removeStyle(elements[i], 'opacity');
      }
    }
    this.originalShown = !this.originalShown;
  }

  reflection(showReflection : boolean) {
    if (this.giInFocus <= 0) return
    this.reflectionShown = !showReflection
    // @ts-ignore
    let reflections = document.getElementById('gallery-item-'+this.giInFocus).querySelectorAll('.gallery-content-main-reflection')
    // @ts-ignore
    let images = document.getElementById('gallery-item-'+this.giInFocus).querySelectorAll('.edited')
    for (let i = 0; i < reflections.length; i++) {
      if(!this.reflectionShown) {
        this.renderer.setStyle(reflections[i], 'opacity', '1');
        this.renderer.setStyle(images[i], 'opacity', '0.3');
      }
      else {
        this.renderer.removeStyle(reflections[i], 'opacity');
        this.renderer.removeStyle(images[i], 'opacity');
      }
    }
    this.reflectionShown = !this.reflectionShown;
  }

  checkWhichGalleryItem(galleryOffset: number) : number {
    switch (true) {
      case galleryOffset >= -20 && galleryOffset <= 20: {
        return 1;
      }
      case galleryOffset >= 580 && galleryOffset <= 620: {
        return 2;
      }
      case galleryOffset >= 1180 && galleryOffset <= 1220: {
        return 3;
      }
      case galleryOffset >= 1780 && galleryOffset <= 1820: {
        return 4;
      }
      case galleryOffset >= 2380 && galleryOffset <= 2420: {
        return 5;
      }
    }
    this.resetOptions()
    return 0
  }

  resetOptions() {
    let reflections = document.querySelectorAll('.gallery-content-main-reflection')
    let originals = document.querySelectorAll('.original')
    let edits = document.querySelectorAll('.edited')
    for (let i = 0; i < reflections.length; i++) {
      this.renderer.removeStyle(reflections[i], 'opacity');
      this.renderer.removeStyle(edits[i], 'opacity');
      this.renderer.removeStyle(originals[i], 'opacity');
    }
    this.reflectionShown = false;
    this.originalShown = false;
  }

  turnLogo(pre : number) {
    this.renderer.setStyle(document.getElementById('logo-circle'), 'transform', 'rotate(' + pre * 360+'deg)')
  }

  ngOnInit(): void {
  }

  highlight(active: string, inactive: string, inactive1: string) {
    // @ts-ignore
    document.getElementById(active).classList.add('active')
    // @ts-ignore
    document.getElementById(inactive).classList.remove('active')
    // @ts-ignore
    document.getElementById(inactive1).classList.remove('active')
  }
}


