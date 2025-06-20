import { Component, Input, ViewChild } from '@angular/core';

import { DataView } from 'primeng/dataview';
import { SelectItem } from 'primeng/api';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'custom-snippet',
  imports: [DataView, Tag, ButtonModule, CommonModule, DropdownModule, SelectModule, FormsModule, InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './snippet.component.html',
  styleUrl: './snippet.component.scss'
})

export class SnippetComponent {
    @Input() productsData!: Product[];
    @Input() loading : boolean = true;
    @ViewChild('dv') dv!: DataView;

    sortOptions!: SelectItem[];

    sortOrder!: number;

    sortField!: string;

    selectedSortValue: string = '';

    ngOnInit() {
        this.sortOptions = [
            { label: 'Price: High to Low', value: '!price' },
            { label: 'Price: Low to High', value: 'price' },
            { label: 'Discount: High to Low', value: '!discountPercentage' },
            { label: 'Discount: Low to High', value: 'discountPercentage' },
            { label: 'Rating: High to Low', value: '!rating' },
            { label: 'Rating: Low to High', value: 'rating' },
        ];
    }

    onSortChange(event: any) {
        let value = event.value;

        if (value.startsWith('!')) {
            this.sortOrder = -1;
            this.sortField = value.substring(1);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }

        this.selectedSortValue = value;
    }

    getAvailability(status: string) {
        switch (status.toLowerCase()) {
            case 'in stock':
                return 'success';

            case 'low stock':
                return 'warn';

            default:
                return 'danger';
        }
    }
}
