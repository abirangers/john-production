import { Category } from "./category";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    category: string;
}

export type GetProductResponse = Product[];

export interface GetProductsProps {
    search: string;
    category: string;
}