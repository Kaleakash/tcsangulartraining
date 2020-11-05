import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productInfo:Product[];
  flag:boolean = false;
  constructor(private productService:ProductService) { }  // DI for ProductService
  
  ngOnInit(): void {
  }

  loadProduct(): void {
    this.flag = true;
    this.productService.loadProductDetails().subscribe(data=>this.productInfo=data);
  }
}
