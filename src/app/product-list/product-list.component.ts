import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'product-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService) { 
    this.listFilter = ''
  }

  pageTitle = "Product List"
  showImage:boolean = false
  _listFilter:string
  errorMessage:any

  get listFilter():string{
    return this._listFilter
  }

  set listFilter(value:string){
    this._listFilter = value
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
  }

  filteredProducts:IProduct[]
  products:IProduct[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        this.filteredProducts = this.products
      },
      error => this.errorMessage = <any>error

    )
    

  }

  toggleImage():void{
    this.showImage = !this.showImage
  }

  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase()

    return this.products.filter((product:IProduct)=>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }

  ratingClicked(message:string){
    this.pageTitle = this.pageTitle + " : " + message
  }

  
}
