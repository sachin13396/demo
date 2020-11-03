import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Item } from '../header/item.model';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: Item[]=[];
  cartQuantity=0;
  productItem: number;
  constructor(private apiService: ApiService, private msg:MessengerService) { }

  ngOnInit(): void {
    this.getEcommerceData()
  }
  getEcommerceData() {
    this.apiService.getItems().subscribe(data=>this.items=data['data']);
   }
   addToCart(item)
  {
    this.cartQuantity+=1;
    this.productItem=this.cartQuantity;
    item={
      product:item,
      quantity: this.cartQuantity,
     
    }
    this.msg.sendMsg(item);
  }
}
