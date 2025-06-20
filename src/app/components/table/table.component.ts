import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';

import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'custom-table',
  imports: [CommonModule, TableModule, RatingModule, FormsModule, InputTextModule, IconFieldModule, InputIconModule, TagModule, MultiSelectModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
    @Input() productsData!: Product[];
    @Input() loading : boolean = true;
    @ViewChild('dt') dt!: Table;

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
