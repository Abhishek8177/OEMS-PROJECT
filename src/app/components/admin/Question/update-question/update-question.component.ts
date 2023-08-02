import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit{

  updateQuestionForm=new FormGroup({
    content:new FormControl(null,[Validators.required]),
    option1:new FormControl(null,[Validators.required]),
    option2:new FormControl(null,[Validators.required]),
    option3:new FormControl(null,[Validators.required]),
    option4:new FormControl(null,[Validators.required]),
    answer:new FormControl(null,[Validators.required]),


  })

  questionId:any
  quizTitle:any
  getQuestionData:any

  constructor(private questionService:QuestionService, private activatedRoute:ActivatedRoute, private route:Router ){}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((res:any)=>{console.log(res)
    this.questionId=res.id
    this.quizTitle=res.title
    });
    this.questionService.getQuestionById(this.questionId).subscribe((res:any)=>{console.log(res);
    this.getQuestionData=res
    })
  }

  updateQuestionData()
  {
    console.log(this.updateQuestionForm.value);
    let setUpdateData={
      "question_id":this.questionId,
      "content":this.updateQuestionForm.value.content,
      "option1":this.updateQuestionForm.value.option1,
      "option2":this.updateQuestionForm.value.option2,
      "option3":this.updateQuestionForm.value.option3,
      "option4":this.updateQuestionForm.value.option4,
      "answer":this.updateQuestionForm.value.answer,
      "quiz":{"quiz_id":this.getQuestionData.quiz.quiz_id}
  
    }
    console.log(setUpdateData)
    this.questionService.updatequeData(setUpdateData).subscribe((res:any)=>{console.log(res);
      Swal.fire({
        title:`${this.quizTitle}`,
        text:'Updated Successfully',
        icon:'success'
      });
  
      this.route.navigate([`admin-dashboard/viewQuestion/${this.getQuestionData.quiz.quiz_id}/${this.quizTitle}`])
    })
  }

  


}
