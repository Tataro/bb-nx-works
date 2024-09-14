import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from '@bb-nx-works/shared-ui';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
