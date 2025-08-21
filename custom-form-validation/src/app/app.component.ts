import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'custom-form-validation';
  productForm: FormGroup;
  productCategories: any[] = [
    { id: 1, name: 'Electronics', value: 'electronics' },
    { id: 2, name: 'Clothing', value: 'clothing' },
    { id: 3, name: 'Home & Kitchen', value: 'home_kitchen' },
    { id: 4, name: 'Books', value: 'books' },
    { id: 5, name: 'Sports & Outdoors', value: 'sports_outdoors' },
    { id: 6, name: 'Health & Beauty', value: 'health_beauty' },
    { id: 7, name: 'Toys & Games', value: 'toys_games' },
    { id: 8, name: 'Automotive', value: 'automotive' },
    { id: 9, name: 'Furniture', value: 'furniture' },
    { id: 10, name: 'Groceries', value: 'groceries' },
  ];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productSerialNumber: ['', [Validators.required, this.productSerialValidator]],
      productCategory: ['', Validators.required],
      productName: ['', Validators.required],
      productDescription: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  productSerialValidator(control: AbstractControl) {
    const value = control.value;
    console.log("val", value)
    if(!value) return null;

    const valid = /^[A-Da-d0-9]+$/.test(value);
    return valid ? null : {invalidSerial: true};
  }

  onSubmitProduct() {}


}
