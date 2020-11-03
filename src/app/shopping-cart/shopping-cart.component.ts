import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../header/item.model';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems = [];
  @Input() cartItem: any
  cartTotal = 0;
  cartQuantity= 0;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Item) => {
      console.log("Shopping card component",product);
      this.cartQuantity=product['quantity'];
      this.addProductToCart(product['product'])
    })
  }
  addProductToCart(product: Item) {

    let productExists = false;
    this.cartQuantity=+1;
   
    for (let i in this.cartItems) {
     
      
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
      
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
