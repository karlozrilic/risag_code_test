import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { Product } from "../interfaces/product.interface";
import { Apollo, gql } from "apollo-angular";

@Injectable({ providedIn: 'root' })
export class ProductService {
    private dataSubject = new BehaviorSubject<Product[]>([]);
    data$ = this.dataSubject.asObservable();

    constructor(private apollo: Apollo) {}

    loadData(): void {
        this.apollo.watchQuery({
            query: gql`
                query {
                    dataResponse {
                        products {
                            id
                            title
                            description
                            category
                            price
                            discountPercentage
                            rating
                            stock
                            tags
                            brand
                            sku
                            availabilityStatus
                            thumbnail
                        }
                        total
                        skip
                        limit
                    }
                }
            `
            })
            .valueChanges
            .pipe(
                map((result: any) => 
                    result.data.dataResponse.products.map((p: Product) => ({
                        ...p,
                        id: Number(p.id)
                    }))
                )
            )
            .subscribe(products => this.dataSubject.next(products));
    }
}