import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Product } from '../../models/ecom.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  cartService = inject(CartService);

  product = input.required<Product>();

  handleProductCardClick() {
    this.cartService.addToCart(this.product());
  }
}
