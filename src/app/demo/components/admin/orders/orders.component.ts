import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/demo/service/cart.service';
import { OrdersService } from 'src/app/demo/service/order.service';
import { Router } from '@angular/router';
import { MessageService,ConfirmationService,ConfirmEventType} from 'primeng/api';
import { order_status } from 'src/app/utils/orderStatus';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/demo/service/node.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { payment_method } from '../../../../utils/payment_method';
@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
    providers: [MessageService,ConfirmationService],
})
export class OrdersComponent implements OnInit {
    nodes:any;
    constructor(
        private cartService: CartService,
        private ordersService: OrdersService,
        private router: Router,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private nodeService: NodeService
    ) {
       
    }
    orders: any[] = [];
    products: any[] = [];
    // total: number = 0;
    cartId: any;
    submitted: boolean = false;
    order_status: any = order_status;
    visible: boolean=false;
    statusDetail: boolean=false;
    selectedStatus:number=3;
    orderId:string|null=null;
    productId:string|null=null;
    setStatus:any;
    statusControl: any;
    productDetailId:any;
    orderIdDetail:any;
payment_method:any=payment_method
    public formGroup:any;
    showDialog(orderId:string,productId:string,status:any) {
        this.orderId=orderId;
        this.productId=productId
        this.visible = true;
        this.statusControl.setValue(status);
    }
    showDetail(orderId:string,productId:string) {
        this.statusDetail = true;
        this.productDetailId=productId
        this.orderIdDetail=orderId
        

    }
  
    ngOnInit() {
        this.formGroup= new FormGroup({
            status: new FormControl(1),
        });
        this.statusControl = this.formGroup.get('status');
        const user = localStorage.getItem('user');
        const getUser = user ? JSON.parse(user) : null;
        if (!getUser) {
            this.router.navigate(['/login']);
        }
        this.getAllOrder()
    }
    updateStatusOrder(){
        const {status}=this.formGroup.value
        this.ordersService.updateOrderStatus({
            orderId:this.orderId,
            productId:this.productId,
            status
        }).subscribe((res)=>{
            this.getAllOrder()
        })
        this.visible = false;
    }
    getAllOrder(){
        this.ordersService.getAllOrders().subscribe((res) => {
            const convertedArr = res.map((item: any) => {
                const products = item.products.map((product: any) => {
                    const totalPriceItem = product.quantity * product.price;
                    return { ...product, totalPriceItem };
                });
                return {
                    ...item,
                    products,
                    createdAt: new Date(item.createdAt).toLocaleDateString(
                        'vi-VI'
                    ),
                };
            });
            console.log(convertedArr)
            this.products = convertedArr;
        });
    }
  
}
