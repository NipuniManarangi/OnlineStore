import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
user:any;
  constructor(private service:UserService,private toastr:ToastrService) { }

  ngOnInit() {
    
let user=localStorage.getItem('data');
console.log(user);
    // this.service.getUserDetails().subscribe(

    //   res => {
    //     //this.userDetails = res;
    //     let userDetails = res["data"];
    //     console.log(userDetails["email"]);



    //   },
    //   err =>{
    //     console.log(err);
    //   }
//       (res:any)=>{
//         if(res.status==1){
//         this.userDetails = res.data;
//         this.toastr.success('Login successful !');
//         }
//         else
//         this.toastr.error('Can not load data');

// },
// err =>{

//   console.log(err);
// }


 //   );
  }

}
