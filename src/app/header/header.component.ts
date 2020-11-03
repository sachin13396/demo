import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';
import { Item } from './item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity=0;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Item) => {
      console.log("Shopping card component",product);
      this.cartQuantity=product['quantity'];
   
    })
  }

}
