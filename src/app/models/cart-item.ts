import { Vehicle } from './vehicle';

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  qty: number;
  price: number;

  constructor(id: number, vehicles: Vehicle, qty = 1) {
    this.id = id;
    this.productId = vehicles._id;
    this.productName = vehicles.make;
    this.price = vehicles.price;
    this.qty = qty;
  }
}
