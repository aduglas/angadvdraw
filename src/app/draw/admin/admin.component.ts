import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit , OnDestroy , OnChanges{

  constructor() { 
    console.log("Ctr AdminComponent");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges AdminComponent");
  }

  ngOnDestroy(): void {
    console.log("onDestroy AdminComponent");
  }

  ngOnInit(): void {
    console.log("onInit AdminComponent");
  }

}
