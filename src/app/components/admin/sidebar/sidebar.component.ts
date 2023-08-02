import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
 export class AdminSidebarComponent implements OnInit {


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
logOut()
{
  this.loginservice.logout()
  this.loginservice.loginStatusSubject.next(false)
  this.route.navigate(['login'])
}
}

// }

