import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private interaction: InteractionService) { }

  ngOnInit(): void {
    this.interaction.subObservable$.subscribe((data) => {
      console.log('Message received in employee => ', data);
    });
  }

  sendMessage() {
    this.interaction.sendMessage('message from employee')
  }

}
