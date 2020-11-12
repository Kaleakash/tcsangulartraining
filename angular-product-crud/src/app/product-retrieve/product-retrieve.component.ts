import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-retrieve',
  templateUrl: './product-retrieve.component.html',
  styleUrls: ['./product-retrieve.component.css']
})
export class ProductRetrieveComponent implements OnInit {
  products:Array<Product>;
  //products:Product[];
  flag : boolean = false;
  constructor(public productService:ProductService) { } //DI for Service class 

  ngOnInit(): void {
  }

  loadProductInfo(): void {
    this.flag = true;
    this.productService.getAllProductDetails().subscribe(data=>this.products=data);
  }
}
