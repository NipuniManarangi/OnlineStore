import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/product/product/IProduct';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  readonly BaseURI = 'http://localhost:50153/api';
  getAllProducts():Observable<IProduct[]>
  {
    //this.BaseURI+'/product/GetProducts'
    return this.http.get('data/products.json').pipe(
      map(data => {
        const propertiesArray: Array<IProduct> = [];
        for(const id in data){
          if (data.hasOwnProperty(id)){
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
      }

      )
    )
  }
}
