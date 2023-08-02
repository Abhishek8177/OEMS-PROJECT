import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public addCategory(data:any)
  {
     return this.http.post(`${baseurl}category/`,data)
  } 

  public getAllCategory()
  {
    return this.http.get(`${baseurl}category/`)
  }

  public deletcategorybyId(category_id:number)
  {
    return this.http.delete(`${baseurl}category/`+category_id)
  }

  public getcategoryByid(category_id:any)
  {
    return this.http.get(`${baseurl}category/`+category_id)
  }

  public updateCategory(body:any)
  {
    return this.http.put(`${baseurl}category/`,body)
  }
}
