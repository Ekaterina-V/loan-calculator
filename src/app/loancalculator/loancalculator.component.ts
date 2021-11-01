import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { Payload } from '../payload';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css'],
})
export class LoancalculatorComponent implements OnInit {
  minMonthlyIncome = 500000;
  minRequestedAmount = 20000000;
  minLoanTerm = 36;
  maxLoanTerm = 360;

  error: undefined;
  response: undefined;

  childrenOptions = ['NONE', 'SINGLE', 'MULTIPLE'];
  coapplicantOptions = ['NONE', 'SINGLE_BORROWER', 'MULTIPLE_BORROWERS'];

  loancalculatorForm = new FormGroup({
    monthlyIncome: new FormControl(null, [
      Validators.required,
      Validators.min(this.minMonthlyIncome),
    ]),
    requestedAmount: new FormControl(null, [
      Validators.required,
      Validators.min(this.minRequestedAmount),
    ]),
    loanTerm: new FormControl(null, [
      Validators.required,
      Validators.min(this.minLoanTerm),
      Validators.max(this.maxLoanTerm),
    ]),
    children: new FormControl(null, Validators.required),
    coapplicant: new FormControl(null, Validators.required),
  });

  constructor(private calculatorService: CalculatorService) {}

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
    console.warn('onSubmit: ', this.loancalculatorForm.value);

    this.calculatorService
      .submitForm(this.loancalculatorForm.value as Payload)
      .subscribe((response) => {
        console.log('onSubmit response: ', response);

        this.error = undefined;
        this.response = undefined;

        if (response.error) {
          this.error = response.error;
        } else {
          this.response = response;
        }
      });
  }
}
