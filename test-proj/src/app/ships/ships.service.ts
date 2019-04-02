import { Injectable } from '@angular/core';
import { ShipsConstants } from '../ships/constants/ships.constants';
import { HttpService } from '../core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private _httpService: HttpService;
  baseDecorator = ShipsConstants.BASE_DECORATOR;


  constructor(httpService: HttpService) {
    this._httpService = httpService;
  }

  getAllShips() {
    return this._httpService.get(this.baseDecorator);
  }

}
