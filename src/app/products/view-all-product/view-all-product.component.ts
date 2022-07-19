import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.scss']
})
export class ViewAllProductComponent implements OnInit {
  productId = 0;
   productList:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data=>{
      this.productList =data;
    })
  }

}
