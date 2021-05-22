import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'product-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService:ProductService, private route:ActivatedRoute, private router:Router) { }

  product:IProduct | undefined
  errorMessage = ''


  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']

    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      err => this.errorMessage = <any>err
    )
  }

  onBack(){
    this.router.navigate(['/products'])
  }
  

}
