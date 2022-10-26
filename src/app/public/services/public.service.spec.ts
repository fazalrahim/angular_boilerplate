import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PublicService } from '@app/public/services/public.service';

describe('PublicService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', () => {
    const service: PublicService = TestBed.get(PublicService);
    expect(service).toBeTruthy();
  });

  it('should have login function', () => {
    const service: PublicService = TestBed.get(PublicService);
    expect(service.login).toBeTruthy();
   });

   it('should have getCoinInfo function', () => {
    const service: PublicService = TestBed.get(PublicService);
    expect(service.getCoinInfo).toBeTruthy();
   });
});
