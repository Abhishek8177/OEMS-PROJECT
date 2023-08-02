import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit{

  quizId:any
  questions:any
  timer:any

  marksGot:any
  correctAnswer:any
  attempted:any

  isSubmit:boolean= false
  constructor(private questionService:QuestionService, private ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe((res:any)=>{console.log(res.quiz_id)
    this.quizId=res.quiz_id
    });
    this.questionService.getQuestionByQuizId(this.quizId).subscribe((res:any)=>{console.log(res)
    this.questions=res
    this.timer=this.questions.length*0.30*100;
    this.startTimer()
    })
  }

  getFormatTime()
  {
    let mm=Math.floor(this.timer/60);
    let ss=this.timer - mm*60;

    return`${mm}:${ss}`
  }

  startTimer()
  {
    let t = window.setInterval(
      ()=>{
        if(this.timer <= 0)
        {
          clearInterval(t)
        }
        else{
          this.timer--

        }
      },1000
      )

  }

  submit()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You wont End Exam",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Exam '
    }).then((result) => {
      if (result.isConfirmed) {
        this.directSubmit()
      }
    })

  }

  directSubmit()
  {
    this.questionService.directSubmit(this.questions).subscribe((res:any)=>{console.log(res);
      this.isSubmit=true
    this.marksGot=res.marksGot;
    this.correctAnswer=res.correctAnswers;
    this.attempted=res.attempted
    })
  }

  print()
  {
    window.print()
  }

}
