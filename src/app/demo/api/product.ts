interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    _id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: InventoryStatus;
    categoryId?: string;
    image?: string;
    rating?: number;
}
