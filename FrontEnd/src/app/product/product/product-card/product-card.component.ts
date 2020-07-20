import { Component, OnInit,Input } from '@angular/core';
import { IProduct } from 'src/app/product/product/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() property : IProduct
  constructor() { }

  ngOnInit(): void {
  }

}
