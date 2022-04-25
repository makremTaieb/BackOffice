import { IUser } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

user : IUser;
  constructor(private userService : UsersService, private activatedRoute :ActivatedRoute , private bcService : BreadcrumbService) {
    this.bcService.set('@userDetails',' ')
    }

  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct(){
    let id : any
    id = this.activatedRoute.snapshot.paramMap.get('id')
    // this.userService.getUser(+id).subscribe(user => {
    //   this.user = user
    //   this.bcService.set('@userDetails', user.displayName)
    // }, error => {
      //   console.log(error)
      // })
      this.user = this.userService.getUser(+id)
      this.bcService.set('@userDetails', this.user.displayName)


  }

}
