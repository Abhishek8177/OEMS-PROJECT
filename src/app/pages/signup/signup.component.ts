import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private loginservice:LoginService,private router:Router){}

  signup=new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.maxLength(15), Validators.minLength(3)]),
    password:new FormControl(null,[Validators.required,Validators.maxLength(15), Validators.minLength(5)]),
    firstname:new FormControl(null,[Validators.required,Validators.maxLength(15), Validators.minLength(2)]),
    lastname:new FormControl(null,[Validators.required,Validators.maxLength(15), Validators.minLength(2)]),
    phone:new FormControl(null,[Validators.required,Validators.maxLength(12),Validators.minLength(9)]),
    email:new FormControl(null,[Validators.required,Validators.email])

  })

  sign()
  {
    console.log(this.signup.value)
    this.loginservice.saveuser(this.signup.value).subscribe((res:any)=>{console.log(res)
      this.router.navigate(['login'])
    })
  }

}
