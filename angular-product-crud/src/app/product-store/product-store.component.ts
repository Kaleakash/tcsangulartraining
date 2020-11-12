import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {
productRef = new FormGroup({
  _id:new FormControl(),
  pname:new FormControl(),
  price:new FormControl()
});
  constructor(public productService:ProductService) { }//DI for Service layer 
  result:string;
  ngOnInit(): void {
  }

  storeProductDetails(): void {
    //console.log(this.productRef.value);
    this.productService.storeProductDetailsInDb(this.productRef.value).
    subscribe(data=>this.result=data.msg)
  }
}
