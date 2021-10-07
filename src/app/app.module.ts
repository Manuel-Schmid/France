import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ParallaxDirective } from './parallax.directive';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryItemComponent,
    AboutComponent,
    FooterComponent,
    PortfolioComponent,
    GalleryComponent,
    ParallaxDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
