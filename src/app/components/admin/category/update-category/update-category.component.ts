import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private categoryservice:CategoryService,private activateRoute:ActivatedRoute,private route:Router){}


  categoryId:any

  ngOnInit(): void {

    this.activateRoute.params.subscribe((res:any)=>{console.log(res.id);
      this.categoryId=res.id;
    });
    this.categoryservice.getcategoryByid(this.categoryId).subscribe((res:any)=>{console.log(res)
      this.updateForm.setValue(res)

    })
  }

  updateForm=new FormGroup({
    category_id:new FormControl(null,[Validators.required]),
    title:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required])
  })


  updatefun()
  {
    console.log(this.updateForm.value)
    this.categoryservice.updateCategory(this.updateForm.value).subscribe((res)=>{console.log(res);
      Swal.fire({
        title:'Success',
        text:'Category Update succesfully',
        icon:'success'
      })

      this.route.navigate(['admin-dashboard/viewcategory'])
    
      
    })
  }

  
}
