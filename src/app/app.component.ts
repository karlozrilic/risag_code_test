import { Component } from '@angular/core';

import { TabsComponent } from './components/tabs/tabs.component';

@Component({
    selector: 'app-root',
    imports: [
        TabsComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'risag_code_test';
}
