import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BusService } from './draw/services/bus.service';
import { FormeGeoState } from './draw/store/formegeo.reducer';
import { addFomeGeo } from "./draw/store/formegeo.actions";
import * as uuid from "uuid";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.new.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{

  routeTest:string ="/admin";

  title = 'AngDraw2';

  constructor(private router: Router , private bus: BusService , private store : Store<FormeGeoState> ) {
        //
  }
 
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onClickBTList(): void{
    this.router.navigate(["/liste"]);
  }

  onClickBTAdmin(): void{
    this.router.navigate(["/admin"]);
  }

  onClickSecond(rt:string) : void {
    this.router.navigate([{ outlets: { autreoutlet : rt }}])
  }

  onClickSendDateHeure(): void{
    this.bus.sendMessage(new Date().toISOString());
  }

  onCreateNewForm() : void{
    this.store.dispatch(addFomeGeo( { formegeo : {
      id: uuid.v4().toString(),
      type: "Rectangle",
      ancrage_x : 100,
      ancrage_y : 150,
      rayon : 75
    } }));
  }


}
