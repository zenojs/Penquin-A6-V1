import { Injectable } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-product';


@Injectable()
export class StoreService {
  constructor() { }
  getTopSellingProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
}