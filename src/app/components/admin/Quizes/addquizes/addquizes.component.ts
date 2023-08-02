import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { QuizeService } from 'src/app/services/quize-service/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquizes',
  templateUrl: './addquizes.component.html',
  styleUrls: ['./addquizes.component.css']
})
export class AddquizesComponent implements OnInit{


  addquizesForm=new FormGroup({
    title:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required]),
    maxMarks:new FormControl(null,[Validators.required]),
    numberOfQuestions:new FormControl(null,[Validators.required]),
    active:new FormControl(null,[Validators.required]),
    category_id:new FormControl(null,[Validators.required])

  })

  getCategoryData:any

  constructor(private quizeservice:QuizeService , private categoryService:CategoryService , private router:Router){}


  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe((res:any)=>{console.log(res);
      this.getCategoryData=res
    })
  }

  addquizesubmit()
  {
    console.log(this.addquizesForm.value)

    let addquizzeData={
      "title":this.addquizesForm.value.title,
      "description":this.addquizesForm.value.description,
      "maxMarks":this.addquizesForm.value.maxMarks,
      "numberOfQuestions":this.addquizesForm.value.numberOfQuestions,
      "active":this.addquizesForm.value.active,
      "category":{"category_id":this.addquizesForm.value.category_id}  
  

    }
    // console.log(addquizzeData)

    this.quizeservice.quizeAdd(addquizzeData).subscribe(
      (res:any)=>{console.log(res);
        Swal.fire({
          title:`${res.title}`,
          text:'added Successfully',
          icon:'success'
        });
        this.router.navigate(['admin-dashboard/viewquize'])
      }
    )
  }

}

