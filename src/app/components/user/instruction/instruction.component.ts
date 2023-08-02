import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizeService } from 'src/app/services/quize-service/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit{

  quizId:any
  quizess:any
  constructor( private quizService:QuizeService, private ActivatedRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {

this.ActivatedRoute.params.subscribe((res:any)=>{console.log(res.quiz_id);
this.quizId=res.quiz_id
});

this.quizService.getquizByid(this.quizId).subscribe((res:any)=>{console.log(res);
this.quizess=res
})
  };

  startExam()
  {
    Swal.fire({
      title: 'Start Exam',
      text: "Are you sure you want to start the exam ?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Start'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate([`startExam/${this.quizId}`])
      }
    })
  }

}
