import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor(private http:HttpClient) { }

 public getAllquizeData()
  {
    return this.http.get(`${baseurl}quiz/`)
  }

  public quizeAdd(body:any)
  {
     return this.http.post(`${baseurl}quiz/`,body)
  }

  public deletquizByid(quiz_id:any)
  {
    return this.http.delete(`${baseurl}quiz/`+quiz_id)
  }

  public getquizByid(quiz_id:any)
  {
    return this.http.get(`${baseurl}quiz/`+quiz_id)
  }

 public updateQuize(data:any)
  {
    return this.http.put(`${baseurl}quiz/`,data)
  }

  public getActiveQuiz()
  {
    return this.http.get(`${baseurl}quiz/active`)
  }

  public getActiveQuizByCategoryId(category_id:any)
  {
     return this.http.get(`${baseurl}quiz/category/active/`+category_id)
  }
}
