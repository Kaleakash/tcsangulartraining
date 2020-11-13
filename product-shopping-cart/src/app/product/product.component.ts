import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../ProductService';

@Component({
	templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

	products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		console.log(this.productService.findAll())
		this.products = this.productService.findAll();
	}


}