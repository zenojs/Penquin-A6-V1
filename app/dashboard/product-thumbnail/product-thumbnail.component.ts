import { DataService } from './../../_services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/product.model';
import { CartService } from '../../_services/cart.service';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Product

  detailViewActive: boolean

  constructor(private cartService: CartService, private dataService: DataService) {

  }

  ngOnInit() {
    this.detailViewActive = false
    this.dataService.getPartnersData().pipe(map(data => { this.product = data; }));
  }

  onProductClick() {
    this.detailViewActive = !this.detailViewActive
  }

  onAddToCart() {
    this.cartService.addProductToCart(this.product)
  }
}
