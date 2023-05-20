import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';

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
        private productService: ProductService
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
}
