import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent  implements OnInit{

  QuestionForm=new FormGroup({
    content:new FormControl(null,[Validators.required]),
    option1:new FormControl(null,[Validators.required]),
    option2:new FormControl(null,[Validators.required]),
    option3:new FormControl(null,[Validators.required]),
    option4:new FormControl(null,[Validators.required]),
    answer:new FormControl(null,[Validators.required]),


  })

  quizId:any
  quizTile:any

  constructor(private questionService:QuestionService, private activatedRoute:ActivatedRoute , private route:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res:any)=>{console.log(res)
    this.quizId=res.id;
    this.quizTile=res.title
    })
    
  }

  adddQuestion={

    "content":this.QuestionForm.value.content,
    "option1":this.QuestionForm.value.option1,
    "option2":this.QuestionForm.value.option2,
    "option3":this.QuestionForm.value.option3,
    "option4":this.QuestionForm.value.option4,
    "answer":this.QuestionForm.value.answer

  }

  addQuestionData()

  {
    console.log(this.QuestionForm.value)

   let adddQuestion={
      "content":this.QuestionForm.value.content,
      "option1":this.QuestionForm.value.option1,
      "option2":this.QuestionForm.value.option2,
      "option3":this.QuestionForm.value.option3,
      "option4":this.QuestionForm.value.option4,
      "answer":this.QuestionForm.value.answer,
      "quiz":{"quiz_id":this.quizId}
  
    }
    this.questionService.addQuestion(adddQuestion).subscribe((res:any)=>{console.log(res);
      Swal.fire({
        title:`${this.quizTile}`,
        text:'Added Successfully',
        icon:'success'
      });

    this.route.navigate([`admin-dashboard/viewQuestion/${this.quizId}/${this.quizTile}`])
    })
  
  }

}
