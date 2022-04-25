import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes : Routes = [
    { path: '', component: UsersComponent},
    { path: ':id', component: UserDetailsComponent, data: { breadcrumb: { alias: 'userDetails' } } },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
