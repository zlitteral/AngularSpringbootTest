import { Injectable } from '@angular/core';
import { API_URL } from '../../core.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api_url = API_URL.api_url;

  constructor(private http: HttpClient) {

  }

  get(urlDecoration) {
    return this.http.get(this.api_url + urlDecoration);
  }
}
