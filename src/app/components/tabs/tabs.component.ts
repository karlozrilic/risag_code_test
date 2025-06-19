import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

import { TabsModule } from 'primeng/tabs';
import { TableComponent } from '../table/table.component';

import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'custom-tabs',
  imports: [TabsModule, TableComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})

export class TabsComponent implements OnInit {
    loading : boolean = true;
    products!: Product[];

    constructor(private apollo: Apollo) {};

    ngOnInit(): void {
        this.apollo
            .watchQuery({
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
            .valueChanges.subscribe((result: any) => {
                this.products = result.data.dataResponse.products.map((p : Product) => ({
                    ...p,
                    id: Number(p.id)
                }));
                this.loading = false
            });
    };
}
