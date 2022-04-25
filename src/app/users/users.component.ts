import { UsersService } from './users.service';
import { IUser } from './../shared/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users : IUser[];

  actionUsers= ["Ajout d'un accès","Consultation des accès","Mise à jours"]

 

  constructor(private userService : UsersService) { 
    this.users = this.userService.getProducts();
   
  }

  ngOnInit(): void {
    this.userService.token().subscribe(data => {
      console.log(data)
    })
  }

}
