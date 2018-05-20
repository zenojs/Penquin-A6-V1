import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.scss']
})
export class UploadPhotosComponent implements OnInit {

  form: FormGroup;
  description: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UploadPhotosComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      //this.description = 'Upload Photos';
    this.description = data.title;
  }

  ngOnInit() {
    this.form = this.fb.group({ });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }
  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }
}