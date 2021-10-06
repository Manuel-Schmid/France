import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { // runs when the component loads
  }

  title: string = 'France'; // could be directly used in HTML with: {{ title }}


  doSomething() {
    console.log('called')
  }
}
