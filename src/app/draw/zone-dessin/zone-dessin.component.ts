import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fabric } from "fabric";
import { Circle } from 'fabric/fabric-impl';
import { Observable, Subscription } from 'rxjs';
import { FormeGeo } from '..';
import { FormeGeoState } from '../store/formegeo.reducer';
import { isDrawing , formegeos } from '../store/formegeo.selector';

@Component({
  selector: 'app-zone-dessin',
  templateUrl: './zone-dessin.component.html',
  styleUrls: ['./zone-dessin.component.css']
})
export class ZoneDessinComponent implements OnInit , AfterViewInit , OnDestroy{

  //@ViewChild('lecanvas') private canvasRef!: ElementRef;
  isDrawing$: Observable<boolean>;
  isDrawingSubscribe!: Subscription;

  allForms$ : Observable<FormeGeo[]>;
  allFormsSubscribe!: Subscription;


  private _canvas?: fabric.Canvas;

  constructor(private _zone: NgZone , private store : Store<FormeGeoState>) {
    this.isDrawing$ = this.store.select(isDrawing);
    this.allForms$ = this.store.select(formegeos);
   }
 
  ngOnInit(): void {

    this.allFormsSubscribe = this.allForms$.subscribe((tab)=>{
      console.log("D------");
      /*for (const iterator of tab) {
        console.log(iterator);        
      }*/
      this.drawForme(tab);
      console.log("F------");
    });

    this.isDrawingSubscribe = this.isDrawing$.subscribe((value)=>{
      console.log(`isDrawing ${value}`);
          //if (value) {
          //  this.drawFome();
          //  
          //}
    });

    console.log("onInit Zone Dessin");
    /*
    this._canvas = new fabric.Canvas(this.canvasRef.nativeElement , {
      backgroundColor : "#ebebef",
      selection: false,
      preserveObjectStacking:true
    });
    */
   
    this._zone.runOutsideAngular( ()=>{
      this._canvas = new fabric.Canvas('zoned', {
        backgroundColor : "#ebebef",
        selection: false,
        preserveObjectStacking:true
      });
    });
  }

  ngOnDestroy(): void {
    this.isDrawingSubscribe.unsubscribe();
    this.allFormsSubscribe.unsubscribe();
  }


  ngAfterViewInit(): void {
    console.log("after init");
    //this.drawFome();
  }

  drawForme(tab: FormeGeo[]) {

    this._canvas?.clear();

    for (const iterator of tab) {
      const lecercle:fabric.Circle = new fabric.Circle(
        {
          radius: iterator.rayon,
          fill: "red",
          left: iterator.ancrage_x,
          top: iterator.ancrage_y
        }
      );
  
      this._canvas?.add(lecercle);        
    }

    console.log(this._canvas?.toJSON());

  }

}
