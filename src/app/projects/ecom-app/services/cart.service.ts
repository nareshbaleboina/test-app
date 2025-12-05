import { Injectable, signal } from '@angular/core';
import { CartProduct, Product } from '../models/ecom.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartProduct[]>([]);
  constructor() {}

  addToCart(product: Product) {
    // handle the duplicate prodcuts later
    const isExisted = this.cartItems().findIndex((p) => p.id === product.id);
    console.log('isExist:::', isExisted);
    if (isExisted !== -1) {
      alert("It's already added in cart");
    } else {
      this.cartItems.update((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(id: number) {
    this.cartItems.update((prev) => prev.filter((p) => p.id !== id));
  }

  incrementQuantity(id: number) {
    this.cartItems.update((products) =>
      products.map((pd) => {
        if (pd.id === id) {
          console.log('updated:::inc', pd);
          return { ...pd, quantity: pd.quantity + 1 };
        }

        return pd;
      })
    );
  }

  decrementQuantity(id: number) {
    this.cartItems.update((products) =>
      products.map((pd) => {
        if (pd.id === id) {
          console.log('dec::updated', pd);
          return { ...pd, quantity: pd.quantity - 1 };
        }

        return pd;
      })
    );
  }
}
