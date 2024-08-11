import { GetProductResponse, GetProductsProps, Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "../api/product.service";

export interface ProductQueryParams {
  search: string;
  category: string;
}

export const useProductsQuery = (params?: ProductQueryParams) => {
  return useQuery<GetProductResponse>({
    queryKey: ["getProducts", { params }],
    queryFn: () => getProducts(params as ProductQueryParams),
  });
};

export const useProductByIdQuery = (id: number) => {
  return useQuery<Product>({
    queryKey: ["getProductById", { id }],
    queryFn: () => getProductById(id),
  });
};