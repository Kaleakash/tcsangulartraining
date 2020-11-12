import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(public productService:ProductService) { }//DI for Service 
  result:string;
  ngOnInit(): void {
  }

  deleteProduct(prodId){
    this.productService.deleteProductById(prodId).
    subscribe(data=>this.result=data.msg);
  }
}
