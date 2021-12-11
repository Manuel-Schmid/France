import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // activeMenuItem: 'home' | 'about' | 'resume' | 'skills' | 'contact';

  @ViewChild('landing') landing: ElementRef | any;
  @ViewChild('gallery') gallery: ElementRef | any;
  @ViewChild('film') film: ElementRef | any;
  safeURL: SafeResourceUrl;
  videoURL = 'https://www.youtube.com/embed/IE5Q6n4cmys?vq=hd1080&rel=0';

  constructor(private router: Router, private renderer: Renderer2, private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    // @ts-ignore
    if ((window.pageYOffset + this.gallery.nativeElement.offsetHeight / 2) < this.gallery.nativeElement.offsetTop) {
      console.log("landing")
      // this.activeMenuItem = 'landing';
    }
    // @ts-ignore
    if ((window.pageYOffset + this.gallery.nativeElement.offsetHeight / 2) >= this.gallery.nativeElement.offsetTop) {
      console.log("gallery")
      // this.activeMenuItem = 'gallery';
    }
    // @ts-ignore
    const parent: HTMLElement = document.getElementById('gallery');
    const galleryOffset = Math.round(window.pageYOffset - (this.gallery.nativeElement.offsetHeight / 4 - (0.11 * this.gallery.nativeElement.offsetHeight / 5)))
    // console.log(galleryOffset)

    if (galleryOffset >= 0 && galleryOffset <= 1200) { // gallery section
      for (let i = 0; i < parent.children.length; i++) {
        this.renderer.setStyle(parent.children[i], 'position', 'fixed');
        this.renderer.setStyle(parent.children[i], 'top', '11vh');
        this.renderer.setStyle(parent.children[i], 'height', '100%');
        this.renderer.setStyle(parent.children[i], 'left', ((i * 100) - (Math.round(galleryOffset/3))) +'%');
      }
    } else if (galleryOffset > 1200) { // film player section
      this.renderer.setStyle(parent.children[parent.children.length-1], 'left', '0');
    } else { // landing section
      for (let i = 0; i < parent.children.length; i++) {
        this.renderer.setStyle(parent.children[i], 'position', 'relative');
        this.renderer.removeStyle(parent.children[i], 'top');
        this.renderer.removeStyle(parent.children[i], 'left');
        this.renderer.setStyle(parent.children[i], 'height', '89vh');
      }
    }
  }

  onScrollInto(element: Element): void {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
  }
}


