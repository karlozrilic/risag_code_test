import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product.interface';

import { TabsModule } from 'primeng/tabs';
import { TableComponent } from '../table/table.component';
import { SnippetComponent } from '../snippet/snippet.component';

import { ProductService } from '../../services/data.service';

import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'custom-tabs',
  imports: [CommonModule, TabsModule, TableComponent, SnippetComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  animations: [
    trigger('fadeAnimation', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('200ms ease-in', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate('200ms ease-out', style({ opacity: 0 }))
        ])
    ])
  ]
})

export class TabsComponent implements OnInit {
    loading : boolean = true;
    products!: Product[];

    activeTabIndex = 0;

    constructor(private productService: ProductService) {}

    // I fetch data once here in tabs component and then pass it to both table and snippet components to avoid fetching data twice
    ngOnInit(): void {
        this.productService.loadData();
        this.productService.data$.subscribe(products => {
            this.products = products;
            this.loading = false
        });
    };
}
