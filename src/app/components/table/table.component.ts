import { Component, Input, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'custom-table',
  imports: [TableModule, RatingModule, FormsModule, InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
    @Input() productsData!: ProductsService;
    @ViewChild('dt') dt!: Table;
    searchValue: string | undefined;
}
