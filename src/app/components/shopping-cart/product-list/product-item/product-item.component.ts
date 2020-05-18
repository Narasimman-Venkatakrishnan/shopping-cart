import { Component, OnInit, Input } from '@angular/core';
import {Vehicle } from 'src/app/models/vehicle';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import {WarehouseDetails} from '../../../../models/warehouse-details';
import {ProductService} from '../../../../services/product.service';
import { CartAddedModalComponent } from '../../cart/cart-added-modal/cart-added-modal.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() vehicle: Vehicle;
  warehouseDetails: WarehouseDetails;
  hideDetails = false;
  // MatPaginator Inputs
  public length = 100;
  public pageSize = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private productService: ProductService,
              private msg: MessengerService,
              private cartService: CartService,
              private dialog: MatDialog

  ) { }

  ngOnInit() {
  }
  checkAddedCart(id) {
    return this.cartService.checkCartAdded(id);
  }
  handleAddToCart() {
    this.cartService.addProductToCart(this.vehicle);
    this.msg.sendMsg(this.vehicle);
    this.dialog.open(CartAddedModalComponent);
  }
  viewDetails() {
    this.hideDetails = ! this.hideDetails;
    this.productService.getVehicleDetails(this.vehicle._id).subscribe(data => {
      this.warehouseDetails = data;
    });
    }
  close() {
    this.hideDetails = ! this.hideDetails;
  }
}
