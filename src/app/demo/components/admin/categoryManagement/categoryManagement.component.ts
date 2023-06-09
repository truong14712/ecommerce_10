import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/demo/api/product';
import { Category } from 'src/app/demo/api/category';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CategoryService } from 'src/app/demo/service/category.service';

@Component({
    templateUrl: './categoryManagement.component.html',
    providers: [MessageService],
})
export class CategoryManagement implements OnInit {
    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: Category[] = [];

    product: Category = {};

    selectedProducts: Category[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private messageService: MessageService,
        private categoryService: CategoryService
    ) {}

    ngOnInit() {
        this.categoryService.getAllCategory().subscribe(
            (res) => {
                this.products = res.data;
            },
            (err) => {
                console.log(err);
            }
        );
        this.cols = [
            { field: 'category', header: 'Category' },
            { field: 'name', header: 'name' },
        ];
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(category: Category) {
        this.product = { ...category };
        this.productDialog = true;
        console.log(this.product);
    }

    deleteProduct(category: Category) {
        this.deleteProductDialog = true;
        this.product = { ...category };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(
            (val) => !this.selectedProducts.includes(val)
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Categories Deleted',
            life: 3000,
        });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.categoryService
            .deleteCategory(this.product?._id)
            .subscribe((res) => {
                console.log(res);
            });
        this.products = this.products.filter(
            (val) => val._id !== this.product._id
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Category Deleted',
            life: 3000,
        });
        this.product = {};
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product._id) {
                // @ts-ignore
                this.products[this.findIndexById(this.product._id)] =
                    this.product;
                this.categoryService
                    .updateCategory(this.product)
                    .subscribe((res) => {
                        console.log(res);
                    });
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Category Updated',
                    life: 3000,
                });
            } else {
                this.categoryService
                    .createCategory(this.product)
                    .subscribe((res) => {
                        this.product = res;
                    });
                this.categoryService.getAllCategory().subscribe((res) => {
                    this.products = res.data;
                });
                // @ts-ignore
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Category Created',
                    life: 3000,
                });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i]._id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
