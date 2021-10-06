import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // with this tag the component will be integrated into the html ( <app-root><app-root/> )
  templateUrl: './app.component.html', // html-file
  styleUrls: ['./app.component.scss'] // stylesheet(s)
})
export class AppComponent { // here you can add properties and methods (lifecycle-methods)
}
