import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  addNewProduct(form){
  console.log(form.value);

  let newProduct ={
    id:142,
    categoryId:form.value.product_category,
    productName:form.value.product_name,
    descriptions:form.value.product_description,
    rating:form.value.product_rating,
    price:form.value.product_price,
    productImg:'https://unsplash.com/photos/SqLyNHbsLKQ',
    isAvailble:1,
    color:form.value.product_color,
    review:form.value.product_category,
  };
  console.log(newProduct);
  this.productService.createProduct(newProduct).subscribe(data=>{
    console.log(data);
  });
  }
}
