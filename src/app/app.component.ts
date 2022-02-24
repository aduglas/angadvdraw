import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {

  routeTest:string ="/admin";

  title = 'AngDraw2';

  constructor(private router: Router) {
        //
  }


  onClickBTList(): void{
    this.router.navigate(["/liste"]);
  }

  onClickBTAdmin(): void{
    this.router.navigate(["/admin"]);
  }

}
