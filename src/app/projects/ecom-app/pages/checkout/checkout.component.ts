import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  checkoutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    address: new FormControl('', Validators.required),
    zipCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{6}$/),
    ]),
  });

  isInvalid(field: string) {
    const control = this.checkoutForm.get(field);
    return control?.invalid && control?.touched;
  }

  handleSubmit() {
    console.log('submit:::', this.checkoutForm.valid);
  }
}
