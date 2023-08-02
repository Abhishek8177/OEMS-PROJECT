import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  quizId:any
  quizTitle:any
  getAllQuestion:any

  constructor(private questionService:QuestionService, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((res:any)=>{console.log(res);
      this.quizId=res.id
      this.quizTitle=res.title
    });
    this.getAllQuestionData()
  }

  getAllQuestionData()
  {
    this.questionService.getAllQuestionbyQuizId(this.quizId).subscribe((res:any)=>{console.log(res);
    this.getAllQuestion=res;
    })
  }

  deletQuestion(question_id:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.questionService.deletQuestionById(question_id).subscribe((res:any)=>{console.log(res);
          this.getAllQuestionData()
        })
  
      };
  
    })
  }

  

}
