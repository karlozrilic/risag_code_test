import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { TabsModule } from 'primeng/tabs';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'custom-tabs',
  imports: [TabsModule, TableComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})

export class TabsComponent {
    products = inject(ProductsService);
}
