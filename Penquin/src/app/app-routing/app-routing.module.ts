import { PartnerComponent } from './../profile/partner/partner.component';
import { LoginComponent } from './../profile/login/login.component';
import { EditProfileComponent } from './../profile/edit-profile/edit-profile.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { CommunicationsComponent } from '../communications/communications.component'
import { MatchesComponent } from '../matches/matches.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'partner', component: PartnerComponent, },
  { path: 'matches', component: MatchesComponent, },
  { path: 'communications', component: CommunicationsComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'editprofile', component: EditProfileComponent, },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
