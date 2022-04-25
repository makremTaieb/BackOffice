import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item/user-item.component';
import { UsersComponent } from './users.component';
import { UserRoutingModule } from './user.routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [UsersComponent,
    UserItemComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
