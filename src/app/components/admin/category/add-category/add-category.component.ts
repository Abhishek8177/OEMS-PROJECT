import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  addcategoryForm=new FormGroup({
    title:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required])
  })

  constructor(private category:CategoryService,private router:Router){}


  adCategory()
  {
    console.log(this.addcategoryForm.value)
    this.category.addCategory(this.addcategoryForm.value).subscribe((res:any)=>{console.log(res)
    
      Swal.fire({
        title:`${res.title}`,
        text:'Category added succesfully',
        icon:'success'
      })
      this.router.navigate(['admin-dashboard/viewcategory'])
    })
  }

}
