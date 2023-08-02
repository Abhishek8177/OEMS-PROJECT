import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit{

getAllData:any
  constructor(private categoryservice:CategoryService ){}
  ngOnInit(): void {
  this.getAllCategoryData()

  }

  getAllCategoryData()
  {
    return this.categoryservice.getAllCategory().subscribe(
      (res)=>{console.log(res)
        this.getAllData=res
      }
    )
  }

  deletcategoryData(category_id:number)
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
        this.categoryservice.deletcategorybyId(category_id).subscribe((res)=>{console.log(res)
          this.getAllCategoryData()
        })
      
      }
    })
  }
}
