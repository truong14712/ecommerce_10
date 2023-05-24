import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    constructor(private productService: ProductService) {}
    products = [];
    ngOnInit() {
        this.productService.getAllProduct().subscribe(
            (res) => {
                this.products = res;
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
