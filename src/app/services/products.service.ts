import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import * as jsonData from '../../assets/products.json';

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    products: Product[] = jsonData.products;
    total: number = jsonData.total;

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number) {
        return this.products[id];
    }
}