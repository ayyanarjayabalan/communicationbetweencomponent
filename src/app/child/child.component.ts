import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() name: string

  @Output() eventName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
      this.eventName.emit('Ayyanar');    
  }

  sendParentName() {
    this.eventName.emit('Ayyanar Jayabalan');
  }
}
