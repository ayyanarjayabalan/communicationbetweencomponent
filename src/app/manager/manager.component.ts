import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private interaction: InteractionService) { }

  ngOnInit(): void {
    // this.interaction.subObservable$.subscribe((data) => {
    //   console.log('Message received in manager => ', data);
    // });
  }

  sendMessage() {
    this.interaction.sendMessage('message from manager')
  }

}
