import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getAllQuestionbyQuizId(quiz_id:any)
  {
     return this.http.get(`${baseurl}question/quiz/all/`+quiz_id)
  }

  public addQuestion(data:any)
  {
     return this.http.post(`${baseurl}question/`,data)
  }

  public getQuestionById(question_id:any)
  {
    return this.http.get(`${baseurl}question/`+question_id)
  }

  public updatequeData(data:any)
  { 
     return this.http.put(`${baseurl}question/`,data)
  }
  
  public deletQuestionById(question_id:any)
  {
    return this.http.delete(`${baseurl}question/`+question_id)
  }

 public getQuestionByQuizId(quiz_id:any)
  {
      return this.http.get(`${baseurl}question/quiz/`+quiz_id)
  }
public directSubmit(question:any)
{
  return this.http.post(`${baseurl}question/direct-quiz/`,question)
}
}
