import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})


export class UserSidebarComponent implements OnInit{


  constructor(private categoryService:CategoryService,private loginservice:LoginService , private route:Router){}
  allCategory:any

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe((res:any)=>{console.log(res);
    this.allCategory=res
    })
  }

  signOut()
  {
    this.loginservice.logout()
    this.loginservice.loginStatusSubject.next(false)
    this.route.navigate(['login'])
  }
  
}





