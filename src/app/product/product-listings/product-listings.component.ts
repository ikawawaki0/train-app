import { Component, OnInit } from '@angular/core';

import { products } from '../../products'

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

  // products: any = [0, 1, 2, 3]

  // lists: any = [0, 1, 2, 3]
  // product: any = products;

  products: any;

  constructor() {}

  ngOnInit() {
    this.products = products
  }

}
