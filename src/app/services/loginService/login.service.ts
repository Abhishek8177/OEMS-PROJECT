import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from '../helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }

 public loginStatusSubject = new Subject<boolean>();

  // use this function for genrate token
 public genrateToken(data:any)
  {
     return this.http.post(`${baseurl}generate-token`,data)
  }

  // login user can set token in localstorage

  public setToken(token:any)
  {
    return localStorage.setItem('token',token)
  }

  // check if user logged in or not

  public isloggedIn()
  {
    let tokenstr=localStorage.getItem('token')
    if(tokenstr==null || tokenstr=='' || tokenstr==undefined)
    {
        return false
    }
    else{
      return true
    }
  }
  
  // get token we use multiple times wherever we used

  public getToken()
  {
    return localStorage.getItem('token')
  }

  // this function give the detail of  current user 
  public getCurrentUser()
  {
    return this.http.get(`${baseurl}current-user`)
  }
  
  // data which we get from current user that we store in local storage and convert into a string formate

  public setUser(user:any)
  {
     return localStorage.setItem('user',JSON.stringify(user))
  }

// it will remove data from local storage
 public logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // if user data is not null to retun data into json farmat else logout
 public getUser()
  {
    let userstr=localStorage.getItem('user')
    if(userstr!=null)
    {
       return JSON.parse(userstr)
    }
    else{
       this.logout
       return null;
    }
  }

  // to check the user roll that it is admin or normal user
  public getUserRoll()
  {
    let user=this.getUser();
    return user.authorities[0].authority;
  }

  saveuser(data:any)
  {
    return this.http.post(`${baseurl}user/`,data)
  }
}
