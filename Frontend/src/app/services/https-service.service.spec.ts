import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpsServiceService } from './https-service.service';

describe('HttpsServiceService', () => {
  let service: HttpsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
