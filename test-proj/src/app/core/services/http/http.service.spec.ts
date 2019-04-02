import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

describe('HttpService', () => {
  let service: HttpService;
  let http: HttpClient;
  beforeEach(() => { service = new HttpService(http); });

  it('should return an observable from the http get', () => {
    // tslint:disable-next-line: no-unused-expression
    (done: DoneFn) => {
      service.get('shipwrecks').subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    };
  });
});
