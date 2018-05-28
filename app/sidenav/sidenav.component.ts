import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  sidenavWidth = 4;

  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

  increase() {
    this.sidenavWidth = 15;
    //console.log("increase sidenav width");
  }

  decrease() {
    this.sidenavWidth = 4;
    //console.log("decrease sidenav width");
  }

  onLogout() {
    this._authService.removeToken();
    this.router.navigate(['/login'])
  }
}
