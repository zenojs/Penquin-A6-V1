import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../_services/login.services';

@Component({
  //moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  isvalid = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    //private alertService: AlertService
  ) { }

  ngOnInit() {
    // reset login status
    this.loginService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = 'dashboard';
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  login() {
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.isvalid = true;
          this.router.navigate([this.returnUrl]);
        },
        error => { 
          this.loading = false;
        });
  }
}
