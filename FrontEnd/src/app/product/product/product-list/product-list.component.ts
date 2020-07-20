import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import {IProduct} from 'src/app/product/product/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  properties: Array<IProduct>;

  constructor(private service:ProductService) { }

  ngOnInit():void {
   // this.service.isLoggedIn;
   this.service.getAllProducts().subscribe(
    data=>{
      this.properties=data;
      console.log(data);
    },error =>{
      console.log('httperror :');
      console.log(error);
    }




   );



  }

}
