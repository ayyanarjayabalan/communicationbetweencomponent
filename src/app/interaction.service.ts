import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService implements OnInit {

  ngOnInit(): void {
    
  }

  private sub = new Subject();

  public subObservable$; 

  constructor() { 
    this.subObservable$ = this.sub as Observable<string>;
  }

  sendMessage(message: string) {
    this.sub.next(message);
  }

}
