import { Component } from '@angular/core';
import { HeaderComponent } from '../pages/header/header.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ecom',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './ecom.component.html',
  styleUrl: './ecom.component.scss',
})
export class EcomComponent {}
