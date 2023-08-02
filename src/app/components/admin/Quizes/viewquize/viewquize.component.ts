import { Component,OnInit } from '@angular/core';
import { QuizeService } from 'src/app/services/quize-service/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewquize',
  templateUrl: './viewquize.component.html',
  styleUrls: ['./viewquize.component.css']
})
export class ViewquizeComponent implements OnInit {

  constructor(private quizeservice:QuizeService){}

  getAllquize:any

  ngOnInit(): void {

    this.getAllquizeDa()
  }

  getAllquizeDa()
  {
    this.quizeservice.getAllquizeData().subscribe((res:any)=>{console.log(res);
      this.getAllquize=res;
    })

  }

  deletquize(quiz_id:any)
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

    this.quizeservice.deletquizByid(quiz_id).subscribe((res)=>{console.log(res);
      this.getAllquizeDa()
    })
  }

})}}