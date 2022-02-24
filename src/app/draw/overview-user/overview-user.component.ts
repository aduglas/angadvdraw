import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { UserEntity, UserHTTPService } from '..';

@Component({
  selector: 'app-overview-user',
  templateUrl: './overview-user.component.html',
  styleUrls: ['./overview-user.component.css']
})
export class OverviewUserComponent implements OnInit , OnDestroy {

  userCurrent!: Observable<UserEntity>;

  constructor( private route: ActivatedRoute,
    private router: Router, private userHttp: UserHTTPService) { 
      console.log("Ctr Overview");
    }


  ngOnInit(): void {
    console.log("NgOninit Overview");
    this.userCurrent = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userHttp.getUserByID(+params.get('id')!))
    );

  }

  ngOnDestroy(): void {
    // TODO ne pas oublié le desabonnement
    console.log("onDestroy Overview");
  }



}
