import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/tag.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  tags: Tag[] = [
    new Tag("CMS"),
    new Tag("Website"),
    new Tag("Responsive")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
