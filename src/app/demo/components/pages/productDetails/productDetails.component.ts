import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { CartService } from 'src/app/demo/service/cart.service';
import { getUser } from 'src/app/utils/getUser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-productDetails',
    templateUrl: './productDetails.component.html',
    styleUrls: ['./productDetails.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    productId: string | any;
    product: Product | any;
    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private cartService: CartService,
        private router: Router,

    ) {}
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.productId = params['id'];
            this.getDetail();
        });
    }
    getDetail() {
        if (this.productId !== undefined && this.productId !== null) {
            if (this.productId) {
                this.productService.getDetail(this.productId).subscribe(
                    (response) => {
                        this.product = response;
                        console.log(response);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            }
        }
    }
    addToCart(productId:string){
        if(!getUser()?._id){
            this.router.navigate(['/login']);
        }
        const {_id}=getUser();
        this.cartService.createCart({
            userId:_id,
            products:[
               {
                productId:productId,
                quantity:1
               }
            ]
        }).subscribe()
        alert("Thêm sản phẩm vào giỏ hàng thành công")
    }

    
}
