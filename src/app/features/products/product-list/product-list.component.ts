import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/tag.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [
    new Product("Service App", "Reponsive service application to promote your sevices online with custom UI CMS.", "http://localhost:4200/assets/img/images.png", "59.99"),
    new Product("Service App", "Reponsive service application to promote your sevices online with custom UI CMS.", "http://localhost:4200/assets/img/images.png", "59.99"),
    new Product("Service App", "Reponsive service application to promote your sevices online with custom UI CMS.", "http://localhost:4200/assets/img/images.png", "59.99"),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
