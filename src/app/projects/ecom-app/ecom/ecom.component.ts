import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-ecom',
  imports: [ButtonComponent],
  templateUrl: './ecom.component.html',
  styleUrl: './ecom.component.scss',
})
export class EcomComponent {
  handleLogoutClick() {
    console.log('logout clicked');
  }
}
