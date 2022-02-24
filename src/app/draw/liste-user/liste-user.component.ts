import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity, UserHTTPService } from '..';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {

  tabUsers : UserEntity[] = [];

  constructor(private userHttp : UserHTTPService , private router : Router) { }

  ngOnInit(): void {
    this.retreiveUsers();
  }

  retreiveUsers(): void{
    console.log("Demande recup user");
    this.userHttp.getAllUser().subscribe((tab: UserEntity[])=>{
      console.log("Recup OK");
        this.tabUsers = tab;
    });
  }

  selectUserClick(id:number): void{
    // navigation
    this.router.navigate(["user",id]);

    this.userHttp.getUserByID(id).subscribe((entity: UserEntity)=>{
      console.log(entity);
    });
  }



}
