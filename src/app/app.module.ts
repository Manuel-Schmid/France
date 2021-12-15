import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ParallaxDirective } from './parallax.directive';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [
  { path: '', component: PortfolioComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
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
