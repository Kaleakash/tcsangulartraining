import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productRef = new FormGroup({
    _id:new FormControl(),
    pname:new FormControl(),
    price:new FormControl()
  });

  constructor(public productService:ProductService) { }
  result:string;
  ngOnInit(): void {
  }
updateProductDetails(){
this.productService.updateProductDetailsFromDb(this.productRef.value).subscribe(data=>this.result=data.msg)
}
}
