import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '..';

@Injectable({
  providedIn: 'root'
})
export class UserHTTPService {

  constructor(private http: HttpClient) { }

  getAllUser() : Observable<UserEntity[]>{
      return this.http.get<UserEntity[]>("http://localhost:4000/users");
  }

  getUserByID(id:number): Observable<UserEntity>{
    return this.http.get<UserEntity>(`http://localhost:4000/users/${id}`);
  }


}
