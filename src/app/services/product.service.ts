import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WarehouseDetails} from '../models/warehouse-details';
import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getVehicles() {
    const basicAuth = 'user' + ':' + 'pass';
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic' + btoa(basicAuth));
    return this.http.get<Vehicle[]>(environment.baseURL, {params: null, headers});
  }

  public getVehicleDetails(vehicleId) {
    const basicAuth = 'wareHouseUserName' + ':' + 'wareHouseUserPass';
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic' + btoa(basicAuth));
    return this.http.get<WarehouseDetails>(environment.baseURL + `/${vehicleId}/details`);
  }

}
