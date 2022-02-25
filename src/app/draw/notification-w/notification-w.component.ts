import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-notification-w',
  templateUrl: './notification-w.component.html',
  styleUrls: ['./notification-w.component.css']
})
export class NotificationWComponent implements OnInit , OnDestroy{

  private subsc: Subscription;

  innerMessage:string = "";

  constructor(private bus: BusService ) { 
    this.subsc = this.bus.busNotif.subscribe((message)=>{
      this.innerMessage = message;
    });
  }
  
  ngOnDestroy(): void {
    this.subsc.unsubscribe(); //   
  }

  ngOnInit(): void {
    
  }

}
