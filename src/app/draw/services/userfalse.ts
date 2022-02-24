import { Injectable } from '@angular/core';
import { IUser } from './IUser';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class UserFalseService implements IUser{

  isAdmin(): boolean{
    return false;
  }

  constructor() { }

}
