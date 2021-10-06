import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {
  @Input() color!: string;
  @Input() text!: string;
  @Output() btnClick = new EventEmitter();
  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
