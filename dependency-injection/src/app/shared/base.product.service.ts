import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseProductService {
  abstract getProduct() : Product;
}