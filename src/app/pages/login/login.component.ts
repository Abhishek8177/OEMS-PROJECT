import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=new FormGroup({
    username:new FormControl(null,[ Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    password:new FormControl(null,[Validators.required, Validators.maxLength(15),Validators.minLength(4)])
  })

  constructor( private loginservice:LoginService, private route:Router){}

  submit()
  {
    console.log(this.loginForm.value)
    this.loginservice.genrateToken(this.loginForm.value).subscribe((res:any)=>{console.log(res)
      // set token is used to set token in local storage
    this.loginservice.setToken(res.token)

    // get currentUser will get the current login user data
    this.loginservice.getCurrentUser().subscribe((res:any)=>{console.log(res)
        // respond will set in local storage
        this.loginservice.setUser(res)

        if(this.loginservice.getUserRoll()=="ADMIN")
        {
           this.route.navigate(['admin-dashboard'])
           this.loginservice.loginStatusSubject.next(true)
        }

        else if(this.loginservice.getUserRoll()=="NORMAL")
        {
           this.route.navigate(['user-dashboard'])
           this.loginservice.loginStatusSubject.next(true)

        }
    
    })

    },
    (err)=>{
      Swal.fire({
        title:'User not found',
        text:'Invalid user',
        icon:'error'
      })
    }
    
    )

  }
}
