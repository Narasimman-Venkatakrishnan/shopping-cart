import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Vehicle } from 'src/app/models/vehicle';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  vehicles: Vehicle[];
  vehicleListLength = 0;
  lowValue = 0;
  highValue = 12;

  constructor(private productService: ProductService) { }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  ngOnInit() {
    this.productService.getVehicles().subscribe(data => {
        this.vehicles = data;
        this.vehicleListLength = this.vehicles.length;
    });
  }
}
