import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    constructor(private productService: ProductService,private router: Router) {}
    products: Product[] = [];
    sortOptions: SelectItem[] = [];
    sortOrder: number = 0;

    sortField: string = '';


    orderCities: any[] = [];
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
        this.sortOptions = [
            { label: 'Price High to Low', value: '!price' },
            { label: 'Price Low to High', value: 'price' },
        ];
    }
    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        console.log(dv);
        dv.filter((event.target as HTMLInputElement).value);
    }
    navigateToDetail(productId:string){
        this.router.navigate(['products/detail', productId]);
    }
}
