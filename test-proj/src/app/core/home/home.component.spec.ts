import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ShipsService } from 'src/app/ships/ships.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let _shipsService: ShipsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[HttpClientTestingModule],
      providers: [ShipsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get all ships', () => {
    const comp  = new HomeComponent(_shipsService);

    // tslint:disable-next-line: no-unused-expression 
    (done: DoneFn) => {
      let ships = comp.getAllShips();

      setTimeout( () => {
         expect(ships).toBeTruthy();
         done();
      }, 5000 );

    };
  });
});
