import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/demo/service/cart.service';
import { OrdersService } from 'src/app/demo/service/order.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { order_status } from 'src/app/utils/orderStatus';
@Component({
  selector: 'app-OrderHistory',
  templateUrl: './OrderHistory.component.html',
  styleUrls: ['./OrderHistory.component.scss'],
  providers:[MessageService]
})
export class OrderHistoryComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
    private messageService: MessageService
) {}
orders: any[]=[];
products: any[] = [];
// total: number = 0;
cartId: any;
submitted: boolean = false;
order_status:any=order_status
ngOnInit() {
    const user = localStorage.getItem('user');
    const getUser = user ? JSON.parse(user) : null;
    if (!getUser) {
        this.router.navigate(['/login']);
    }
    this.ordersService.getCartById(getUser._id).subscribe(
        (res)=>{
              const convertedArr = res.map((item: any) => {
                const products = item.products.map((product: any) => {
                  const totalPriceItem = product.quantity * product.price;
                  return { ...product, totalPriceItem };
                });
                return { ...item, products,createdAt:new Date(item.createdAt).toLocaleDateString("vi-VI")
                
                 };
              });
              this.products=convertedArr;
              console.log(this.order_status)
        }
    )
}


}
