import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoancalculatorComponent } from './loancalculator.component';
import { CalculatorService } from '../calculator.service';

class MockCalculatorService {}

describe('LoancalculatorComponent', () => {
  let component: LoancalculatorComponent;
  let fixture: ComponentFixture<LoancalculatorComponent>;

  let calculatorService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoancalculatorComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: CalculatorService, useValue: MockCalculatorService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoancalculatorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
