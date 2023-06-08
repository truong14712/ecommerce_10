import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/demo/service/product.service';
import { CartService } from 'src/app/demo/service/cart.service';
import { getUser } from 'src/app/utils/getUser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    providers: [MessageService],
})
export class CartComponent implements OnInit {
    constructor(
        private cartService: CartService,
        private router: Router,
        private messageService: MessageService
    ) {}
    products: any[] = [];
    totalCart: number = 0;
    cartId: any;
    ngOnInit() {
        const user = localStorage.getItem('user');
        const getUser = user ? JSON.parse(user) : null;
        if (!getUser) {
            this.router.navigate(['/login']);
        } else {
            this.cartService.getCartById(getUser._id).subscribe(
                (res) => {
                    if(res?.cart.length==0){
                        this.products=res.cart
                        return;
                    }
                    this.cartId = res?.cart?._id;
                    const convertedArr = res?.cart?.products.map(
                        (item: any) => ({
                            ...item.productId, // Lấy thông tin chi tiết của sản phẩm từ productId
                            quantity: item.quantity, // Thêm thuộc tính quantity vào đối tượng
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

    decreaseQuantity(productId: string) {
        const { _id } = getUser();
        const product = this.products.find((p) => p._id == productId);
        if (product && product.quantity > 0 && product.quantity !== 1) {
            product.quantity--;
            this.cartService
                .updateCart({
                    userId: _id,
                    products: [
                        {
                            productId: product._id,
                            quantity: 1,
                        },
                    ],
                })
                .subscribe();
        }
    }
    increaseQuantity(productId: string) {
        const { _id } = getUser();
        const product = this.products.find((p) => p._id === productId);
        if (product && productId) {
            product.quantity++;
            this.cartService
                .createCart({
                    userId: _id,
                    products: [
                        {
                            productId: product._id,
                            quantity: 1,
                        },
                    ],
                })
                .subscribe();
        }
    }
    redirectCheckout() {
        this.router.navigate(['checkout', this.cartId]);
    }
    handleDeleteProduct(id: string) {
        const { _id } = getUser();
        const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không');
        if (confirm) {
            const newProductsInCart = this.products.filter((item: any) => {
                return item._id !== id;
            });
            const converArr = newProductsInCart?.map((item: any) => {
                return { quantity: item.quantity, productId: item._id };
            });
            this.cartService
                .updateProductInCart({
                    userId: _id,
                    products: converArr,
                })
                .subscribe();
            this.products = newProductsInCart;
            alert('Xóa sản phẩm thành công');
        }
    }
}
