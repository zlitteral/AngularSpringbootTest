import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/ships/ships.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  private _shipsService: ShipsService;
  ships = [];

  constructor(shipsService: ShipsService) {
    this._shipsService = shipsService;
  }

  ngOnInit() {
  }

  getAllShips() {
    this.ships = [];
    let results = this._shipsService.getAllShips().subscribe( shipResults => {
    // tslint:disable-next-line: forin
      for (let ship in shipResults['_embedded']['shipwrecks']) {
        this.ships.push(shipResults['_embedded']['shipwrecks'][ship]);
      }
      // Return is here to make it easier to unit testy
      return this.ships;
    });
  }

  clear() {
    this.ships = [];
  }

}
