import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryItemComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
