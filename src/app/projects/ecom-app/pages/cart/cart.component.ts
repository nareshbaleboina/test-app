import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [ButtonComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartService = inject(CartService);
  cartItems = computed(() => this.cartService.cartItems());
  router = inject(Router);

  total = computed(() => {
    let count = 0;

    for (let p of this.cartItems()) {
      count += p.price * p.quantity;
    }
    return count.toFixed(2);
  });

  onRemoveClick(id: number) {
    this.cartService.removeFromCart(id);
  }

  incrementClick(id: number) {
    console.log('incre:::', id);
    this.cartService.incrementQuantity(id);
  }

  decrementClick(id: number) {
    console.log('decre:::', id);
    this.cartService.decrementQuantity(id);
  }

  checkoutBtnClick() {
    this.router.navigate(['e-comm', 'checkout']);
  }
}
