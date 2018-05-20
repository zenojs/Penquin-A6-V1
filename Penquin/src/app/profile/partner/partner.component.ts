import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_services/login.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  //moduleId: module.id,
  templateUrl: 'partner.component.html',
  styleUrls: ['./partner.component.scss']
})

export class PartnerComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  isvalid = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.returnUrl = 'login';
  }

  save() {
    this.loading = true;
    this.loginService.register(this.model).subscribe(
      data => {
        this.loading = false;
        //this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error);
        //this.alertService.error(error);
        this.loading = false;
      });;
    //console.log(this.form.value);
    //this.dialogRef.close(this.form.value);
  }

  close() {
    this.router.navigate([this.returnUrl]);
  }

  getErrorMessage(type) {
    if (type == "email")
      return 'You must enter a value';
    else if (type == "mobile")
      return 'Mobile number is required';
    else if (type == "name")
      return 'Enter your full name';
    else if (type == "gender")
      return 'Specify your gender';
    else if (type == "dateofbirth")
      return 'Enter your date of birth';
    else if (type == "password")
      return 'Your password is missing';
    else if (type == "confirmPassword") {
      return this.model.confirmPassword === "" ? 'Confirm password is missing'
        : this.model.password === this.model.confirmPassword ? '' : 'Passwords not matching';
    }
  }
}
