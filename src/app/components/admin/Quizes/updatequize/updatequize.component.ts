import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { QuizeService } from 'src/app/services/quize-service/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatequize',
  templateUrl: './updatequize.component.html',
  styleUrls: ['./updatequize.component.css']
})
export class UpdatequizeComponent implements OnInit {

  quizId:any
  getAllquiz:any
  getCategory:any
  route: any;

  constructor(private quizeService:QuizeService ,private categoryService:CategoryService,private activatedRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {

  this.activatedRoute.params.subscribe((res:any)=>{console.log(res.id);
    this.quizId=res.id
  });
    this.quizeService.getquizByid(this.quizId).subscribe((res:any)=>{console.log(res);
      this.getAllquiz=res;
    });

    this.categoryService.getAllCategory().subscribe((res:any)=>{console.log(res)
      this.getCategory=res;
    })
  }

  updatequizes=new FormGroup({
    quiz_id: new FormControl(null,[Validators.required]),
    title:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required]),
    maxMarks:new FormControl(null,[Validators.required]),
    numberOfQuestions:new FormControl(null,[Validators.required]),
    active:new FormControl(null,[Validators.required]),
    category_id:new FormControl(null,[Validators.required])

})



updatequizesubmit()
{
  console.log(this.updatequizes.value);

  let setUpdateData={
    "quiz_id":this.quizId,
    "title":this.updatequizes.value.title,
    "description":this.updatequizes.value.description,
    "maxMarks":this.updatequizes.value.maxMarks,
    "numberOfQuestions":this.updatequizes.value.numberOfQuestions,
    "active":this.updatequizes.value.active,
    "category":{"category_id":this.updatequizes.value.category_id}

  }

  this.quizeService.updateQuize(setUpdateData).subscribe((res:any)=>{console.log(res);
    Swal.fire({
      title:`${res.title}`,
      text:'updated Successfully',
      icon:'success'
    });
    this.router.navigate(['admin-dashboard/viewquize'])

  })

}
}