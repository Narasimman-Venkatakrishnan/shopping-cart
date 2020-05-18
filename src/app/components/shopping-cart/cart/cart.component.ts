import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Vehicle } from 'src/app/models/vehicle';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Vehicle) => {
      this.loadCartItems();
    });
  }
  clearCart(){
    this.cartItems = this.cartService.clearCart();
  }
  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
    this.calcCartTotal();
  }
  removeCart(id) {
    this.cartItems = this.cartService.removeCartById(id);
    this.calcCartTotal();
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (1 * item.price);
    });
  }
}
