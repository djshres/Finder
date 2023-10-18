import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


//Observables:
//Are the lazy collections of multiple values over time
//You can think of observables like a newsletter: Only subscriber of the newsletter receive the newsletter, If no-one subscribes the
//newsletter it probably will not be printed
//Emits multiple value over time, Lazy, able to cancel, Can use with map-filter-reduce-and other operators

//Promise: 
//Provides a single future value, not lazy, cannot cancel

//Observavles and rxJs: 
//If we wanna transform the data coming from api eg: map, pipe

//Async Pipe: 
//Automatically subscribes/unsubscribes from the observables

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn = false;
  // currentUser$: Observable<User | null> = of(null);

  constructor(public accountService: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    // this.currentUser$ = this.accountService.currentUser$;
  }

  //Note:In case of http request we don't need to unsubscribe, but in this case of our own observable we have to unsubscribe
  //So use of aync pipe is the best option in this case
  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe({
  //     next: user => this.loggedIn == !!user,
  //     error: error => console.log(error)
  //   })
  // }

  // login() {
  //   this.accountService.login(this.model).subscribe({
  //     next: response => {
  //       // console.log(response);
  //       // this.loggedIn = true;
  //       this.router.navigateByUrl('/members');
  //     },
  //     error: error => {
  //       console.log(error);
  //     }
  //   })
  // }

  login(){
    this.accountService.login(this.model).subscribe({
      next: _ =>  this.router.navigateByUrl('/members')
      // error: error => this.toastr.error(error.error) -> we dont need this now because this is handled in error interceptor
    })
  }

  logout() {
    this.accountService.logout();
    // this.loggedIn = false;
    this.router.navigateByUrl('/');
  }
}
