import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavContextService {

  dicoRoute: object[] = [
    { key: "Dessins" , route : "Dessins" },
    { key: "Actions" , route : "Actions"}
  ]

}
