import { Product } from "./product";

export interface Category {
    id: number;
    name: string;
    products: Product[];
}

export type GetCategoriesResponse = Category[];