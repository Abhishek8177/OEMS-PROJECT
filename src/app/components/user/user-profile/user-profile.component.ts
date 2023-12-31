import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

userData:any

  constructor( private loginService:LoginService){}
  ngOnInit(): void {

    this.userData=this.loginService.getUser()
  }

}
