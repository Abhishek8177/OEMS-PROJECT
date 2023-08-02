import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLoggedIn=true
  user:any


  constructor(private loginservice:LoginService , private route:Router){}
  ngOnInit(): void {
    this.isLoggedIn=this.loginservice.isloggedIn()
    this.user=this.loginservice.getUser()
    this.loginservice.loginStatusSubject.asObservable().subscribe(
      (res)=>{this.isLoggedIn=this.loginservice.isloggedIn()
        this.user=this.loginservice.getUser()
      }
    )
  }

  signOut()
  {
    this.loginservice.logout()
    this.loginservice.loginStatusSubject.next(false)
    this.route.navigate(['login'])
  }
}
