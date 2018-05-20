import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchesComponent } from './matches/matches.component';
import { CommunicationsComponent } from './communications/communications.component';
import { SearchBarComponent } from './dashboard/search-bar/search-bar.component';
import { ShowcaseComponent } from './dashboard/showcase/showcase.component';
import { FiltersComponent } from './dashboard/filters/filters.component';
import { SortFiltersComponent } from './dashboard/sort-filters/sort-filters.component';
import { ProductThumbnailComponent } from './dashboard/product-thumbnail/product-thumbnail.component';
import { PartnerComponent } from './profile/partner/partner.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './profile/login/login.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { UploadPhotosComponent } from './profile/upload-photos/upload-photos.component';

import { LoginService } from './_services/login.services';
import { StoreService } from './_services/store.service';
import { DataService } from './_services/data.service';
import { CartService } from './_services/cart.service';
import { TokenInterceptorService } from './_services/token-interceptor.service';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { importType } from '@angular/compiler/src/output/output_ast'
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MatchesComponent,
    CommunicationsComponent,
    SearchBarComponent,
    FiltersComponent,
    ShowcaseComponent,
    SortFiltersComponent,
    ProductThumbnailComponent,
    PartnerComponent,
    SidenavComponent,
    LoginComponent,
    EditProfileComponent,
    UploadPhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ImageCropperModule
  ],
  providers: [StoreService, DataService, CartService, LoginService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
      UploadPhotosComponent
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
