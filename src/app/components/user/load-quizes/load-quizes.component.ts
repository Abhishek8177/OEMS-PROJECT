import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizeService } from 'src/app/services/quize-service/quize.service';

@Component({
  selector: 'app-load-quizes',
  templateUrl: './load-quizes.component.html',
  styleUrls: ['./load-quizes.component.css']
})
export class LoadQuizesComponent implements OnInit {

  categoryId:any
  quizess:any
  constructor(private quizService:QuizeService , private ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe((res:any)=>{console.log(res.category_id)
    this.categoryId=res.category_id
    });

    if(this.categoryId == 0)
    {
         this.quizService.getActiveQuiz().subscribe(
          (res:any)=>{console.log(res);
            this.quizess=res
          }
         )
    }

    else{
      this.quizService.getActiveQuizByCategoryId(this.categoryId).subscribe(
        (res:any)=>{console.log(res);
          this.quizess=res

        }
      )
    }
    
  }

}
