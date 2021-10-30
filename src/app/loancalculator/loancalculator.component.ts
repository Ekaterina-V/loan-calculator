import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css'],
})
export class LoancalculatorComponent implements OnInit {
  loancalculatorForm = new FormGroup({
    monthlyIncome: new FormControl('', [
      Validators.required,
      Validators.min(500000),
    ]),
    requestedAmount: new FormControl('', [
      Validators.required,
      Validators.min(20000000),
    ]),
    loanTerm: new FormControl('', [
      Validators.required,
      Validators.min(36),
      Validators.max(360),
    ]),
    children: new FormControl('', Validators.required),
    coapplicant: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  get monthlyIncome() {
    return this.loancalculatorForm.get('monthlyIncome');
  }

  get requestedAmount() {
    return this.loancalculatorForm.get('requestedAmount');
  }

  get loanTerm() {
    return this.loancalculatorForm.get('loanTerm');
  }

  get children() {
    return this.loancalculatorForm.get('children');
  }

  get coapplicant() {
    return this.loancalculatorForm.get('coapplicant');
  }

  onSubmit() {
    console.warn(this.loancalculatorForm.value);
  }
}
