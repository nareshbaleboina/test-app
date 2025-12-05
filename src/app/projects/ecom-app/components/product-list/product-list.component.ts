import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/ecom.model';
import { ButtonComponent } from '../button/button.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products = signal<Product[]>([]);
  prodcutService = inject(ProductService);

  ngOnInit(): void {
    this.prodcutService.getProducts().subscribe((dt) => {
      this.products.set(dt);
    });
  }
}
