import { Component } from '@angular/core';
import { ProductsComponent } from '@bb-nx-works/products';

@Component({
  standalone: true,
  imports: [ProductsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';
}
