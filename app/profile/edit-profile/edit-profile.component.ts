import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UploadPhotosComponent } from '../upload-photos/upload-photos.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../../product';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  model: any = {};
  user = new User();
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  pictures = [
    {
      id: 1,
      title: 'A natural view',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      id: 3,
      title: 'Favourite pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      id: 4,
      title: 'Abstract design',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
    },
    {
      id: 6,
      title: 'Nightlife',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
    },
  ];

  constructor(private dialog: MatDialog, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      education: new FormControl("", Validators.required),
      college: new FormControl("", Validators.required),
      occupation: new FormControl("", Validators.required),
      organization: new FormControl("", Validators.required),
      salary: new FormControl("", Validators.required),
      religion: new FormControl("", Validators.required),
      subcast: new FormControl("", Validators.required),
      fathername: new FormControl("", Validators.required),
      fatheroccupation: new FormControl("", Validators.required),
      mothername: new FormControl("", Validators.required),
      motheroccupation: new FormControl("", Validators.required),
      country: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required)
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Upload Photos...'
    };

    const dialogRef = this.dialog.open(UploadPhotosComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

  editImage(picture) {
    alert(JSON.stringify(picture));
  }

  deleteImage(picture) {
    alert(JSON.stringify(picture));
  }
}
