import { Component, Input, OnInit } from '@angular/core';
import { NavContextService } from '../nav-context.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentTab: any[] = [];

  @Input("keysRoute") keysRoute: string;

  constructor(public ctx: NavContextService) { 
    this.keysRoute="";
  }

  ngOnInit(): void {
    if (this.keysRoute.length > 0) {
       let strs: string[] = this.keysRoute.split(",");
      for (const iterator of strs) {
       // TODO 
      }      
    }
    this.currentTab = this.ctx.dicoRoute; // pas bien du tout !!!!!!!
  }

}
