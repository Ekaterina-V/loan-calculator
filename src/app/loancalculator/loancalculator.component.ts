import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css'],
})
export class LoancalculatorComponent implements OnInit {
  loancalculatorForm = new FormGroup({
    monthlyIncome: new FormControl(''),
    requestedAmount: new FormControl(''),
    loanTerm: new FormControl(''),
    children: new FormControl(''),
    coapplicant: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
}
