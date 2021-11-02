import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { Payload } from './payload';

describe('CalculatorService', () => {
  let httpTestingController: HttpTestingController;
  let service: CalculatorService;
  let payload: Payload;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CalculatorService);
    httpTestingController = TestBed.inject(HttpTestingController);

    payload = {
      monthlyIncome: 500000,
      requestedAmount: 20000000,
      loanTerm: 36,
      children: 'NONE',
      coapplicant: 'NONE',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected response', () => {
    let expectedResponse = {
      loanAmount: 30000,
      interestRate: 2500,
    };

    service
      .submitForm(payload)
      .subscribe(
        (response) => expect(response).toEqual(expectedResponse),
        fail
      );

    // should have made one request to POST from expected URL
    const req = httpTestingController.expectOne(service.url);
    expect(req.request.method).toEqual('POST');

    // should respond with the expected response
    req.flush(expectedResponse);
  });
});
