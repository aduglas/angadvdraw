import { Injectable } from '@angular/core';
import { IUser } from './IUser';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class UserService implements IUser{

  isAdmin(): boolean{
    return true;
  }

  constructor() { }

}
