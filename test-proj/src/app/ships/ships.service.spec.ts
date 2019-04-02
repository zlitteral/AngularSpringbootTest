import { ShipsService } from './ships.service';
import { HttpService } from '../core/services/http/http.service';

describe('ShipsService', () => {
  let service: ShipsService;
  let http: HttpService;
  beforeEach(() => { service = new ShipsService(http); });

  it('should return an observable from get all ships', () => {
    // tslint:disable-next-line: no-unused-expression
    (done: DoneFn) => {
      service.getAllShips().subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    };
  });
});
