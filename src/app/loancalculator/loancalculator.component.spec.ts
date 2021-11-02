import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

import { LoancalculatorComponent } from './loancalculator.component';
import { CalculatorService } from '../calculator.service';

describe('LoancalculatorComponent', () => {
  let component: LoancalculatorComponent;
  let fixture: ComponentFixture<LoancalculatorComponent>;
  let submitFormSpy: jasmine.Spy;
  let testResponse: {};

  // helper functions to get response values
  let getLoanAmount = () => {
    let loanAmountEl = fixture.nativeElement.querySelector('.loan-amount');
    return loanAmountEl ? loanAmountEl.textContent : null;
  };

  let getInterestRate = () => {
    let interestRateEl = fixture.nativeElement.querySelector('.interest-rate');
    return interestRateEl ? interestRateEl.textContent : null;
  };

  beforeEach(async(() => {
    testResponse = {
      loanAmount: 20000,
      interestRate: 2500,
    };
    const calculatorService = jasmine.createSpyObj('CalculatorService', [
      'submitForm',
    ]);
    submitFormSpy = calculatorService.submitForm.and.returnValue(
      of(testResponse)
    );

    TestBed.configureTestingModule({
      declarations: [LoancalculatorComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: CalculatorService, useValue: calculatorService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoancalculatorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find <h2>', () => {
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const h2 = el.querySelector('h2');
    expect(h2.textContent).toEqual('Loan calculator');
  });

  it('should find monthly-income label', () => {
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const label = el.querySelectorAll('label')[0];
    expect(label.textContent).toEqual('Monthly Income:');
  });

  it('should find requested-amount label', () => {
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const label = el.querySelectorAll('label')[1];
    expect(label.textContent).toEqual('Requested Amount:');
  });

  it('should call submitForm() on submit', () => {
    component.onSubmit();

    expect(submitFormSpy.calls.any()).toBe(true);
  });

  it('should get response', () => {
    component.onSubmit();
    fixture.detectChanges();

    expect(component.response).toEqual(testResponse);
    expect(getLoanAmount()).toEqual('Loan amount: 20');
    expect(getInterestRate()).toEqual(' Interest rate: 2.5 % ');
  });

  it('should get errors if submitForm failed', () => {
    let testErrors = [{ message: 'Error' }];
    submitFormSpy.and.returnValue(throwError(testErrors));

    component.onSubmit();

    expect(component.errors).toEqual(testErrors);
  });
});
