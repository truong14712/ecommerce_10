import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/demo/service/product.service';
import { CategoryService } from 'src/app/demo/service/category.service';
import { Category } from 'src/app/demo/api/category';
import { Toast } from 'primeng/toast';
@Component({
    templateUrl: './productManagement.component.html',
    providers: [MessageService],
})
export class ProductManagement implements OnInit {
    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: any[] = [];

    categories: Category[] = [];

    product: any = {};

    selectedProducts: Product[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    uploadedFiles: any[] = [];

     quantity: number = 1;
    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        private messageService: MessageService
    ) {}

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
        this.categoryService.getAllCategory().subscribe(
            (res) => {
                this.categories = res;
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
        ];
    }

    onBasicUploadAuto(event: any) {
        console.log(event);
        const file = event.files[0];
        console.log(file);
        this.product.image = file;
        this.messageService.add({
            severity: 'info',
            summary: 'Success',
            detail: 'File Uploaded with Auto Mode',
        });
    }
    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(product: Product) {
        this.product = { ...product };
        console.log(this.product)
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.product = { ...product };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(
            (val) => !this.selectedProducts.includes(val)
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Products Deleted',
            life: 3000,
        });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.products = this.products.filter(
            (val) => val._id !== this.product._id
        );
        this.productService.deleteProduct(this.product._id).subscribe(
            (res) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Xóa sản phẩm thành công ',
                    life: 3000,
                });
            },
            (err) => {
                this.messageService.add({
                    life: 3000,
                    severity: 'error',
                    summary: 'Error',
                    detail: `${err.message}`,
                });
            }
        );
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
                this.productService
                .updateProduct(this.product)
                .subscribe((res) => {
                });
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Updated',
                    life: 3000,
                });
            } else {
                this.productService.createProduct(this.product).subscribe(
                    (res) => {
                        this.products.push(res.data);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Product Created',
                            life: 3000,
                        });
                    },
                    (err) => {
                        this.messageService.add({
                            life: 3000,
                            severity: 'error',
                            summary: 'Error',
                            detail: `${err.message}`,
                        });
                    }
                );
                // @ts-ignore
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

    createId(): string {
        let id = '';
        const chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
    
}
