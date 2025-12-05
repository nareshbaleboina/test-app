import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  cartService = inject(CartService);

  handleLogoutClick() {
    console.log('logout clicked');
  }
}
