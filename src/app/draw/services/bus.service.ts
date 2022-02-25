import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  busNotif: BehaviorSubject<string> = new BehaviorSubject("start app");

  constructor() { }

  sendMessage(str:string): void {
      this.busNotif.next(str);
  }


}
