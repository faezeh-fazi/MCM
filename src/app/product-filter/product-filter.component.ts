import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  @Output() filterApplied = new EventEmitter<any>();

  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      productName: [''],
      minPrice: [''],
      maxPrice: [''],
    });
  }

  applyFilter() {
    const filterOptions = this.filterForm.value;
    this.filterApplied.emit(filterOptions);
  }
}
