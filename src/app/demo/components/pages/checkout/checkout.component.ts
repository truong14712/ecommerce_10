import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/demo/service/cart.service';
import { getUser } from 'src/app/utils/getUser';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/demo/service/order.service';
import { MessageService } from 'primeng/api';
import * as shortid from 'shortid';
import capitalizeString from 'src/app/utils/capitalizeString';
@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
    providers: [MessageService],
})

// Thiết lập các ký tự cho phép trong mã ngẫu nhiên của shortid


export class CheckoutComponent implements OnInit {
    constructor(
        private cartService: CartService,
        private ordersService: OrdersService,
        private router: Router,
        private messageService: MessageService
    ) {}
    products: any[] = [];
    totalCart: number = 0;
    cartId: any;
    submitted: boolean = false;
    shortId:any=capitalizeString(shortid.generate())
    public checkoutForm: FormGroup = new FormGroup({
        name: new FormControl(null, Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        payment: new FormControl(1, Validators.required),
    });
    ngOnInit() {
        const user = localStorage.getItem('user');
        const getUser = user ? JSON.parse(user) : null;
        if (!getUser) {
            this.router.navigate(['/login']);
        } else {
            this.cartService.getCartById(getUser._id).subscribe(
                (res) => {
                    this.cartId = res?.cart._id;
                    const convertedArr = res?.cart?.products.map(
                        (item: any) => ({
                            ...item.productId, // Lấy thông tin chi tiết của sản phẩm từ productId
                            quantity: item.quantity,
                            totalPriceItem:
                                item.quantity * item.productId.price,
                            // Thêm thuộc tính quantity vào đối tượng
                        })
                    );
                    for (const item of convertedArr) {
                        this.totalCart += item.price * item.quantity;
                    }
                    this.products = convertedArr;
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    }

    handleSubmit() {
        const { _id } = getUser();
        this.submitted = true;
        const covertData = this.products.map((item) => {
            return {
                productId: item._id,
                quantity: item.quantity,
            };
        });

        this.ordersService
            .createOrder({
                orderId:this.shortId,
                userId: _id,
                products: covertData,
                ...this.checkoutForm.value,
            })
            .subscribe((res) => {
                this.router.navigate(['orderHistory']);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Mua hàng thành công',
                    life: 3000,
                });
                alert("Mua hàng thành công")
                this.cartService.deleteCart(_id).subscribe()
            });
    }
}
