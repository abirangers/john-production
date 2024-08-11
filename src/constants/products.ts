import { Product } from "@/types/product";
import { categories } from "./categories";

export const products: Product[] = [
    {
        id: 1,
        title: "Product 1",
        description: "Description 1",
        price: 100,
        stock: 10,
        image: "/images/products/product1.jpg",
        category: categories[0],
    },
    {
        id: 2,
        title: "Product 2",
        description: "Description 2",
        price: 200,
        stock: 20,
        image: "/images/products/product2.jpg",
        category: categories[1],
    },
    {
        id: 3,
        title: "Product 3",
        description: "Description 3",
        price: 300,
        stock: 30,
        image: "/images/products/product3.jpg",
        category: categories[2],
    },
    {
        id: 4,
        title: "Product 4",
        description: "Description 4",
        price: 400,
        stock: 40,
        image: "/images/products/product4.jpg",
        category: categories[2],
    },
]