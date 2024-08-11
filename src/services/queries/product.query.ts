import { GetProductResponse, GetProductsProps, Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "../api/product.service";

export const useProductsQuery = (params: {search: string, category: string}) => {
  return useQuery<GetProductResponse>({
    queryKey: ["getProducts", { params }],
    queryFn: () => getProducts(params),
  });
};

export const useProductByIdQuery = (id: number) => {
  return useQuery<Product>({
    queryKey: ["getProductById", { id }],
    queryFn: () => getProductById(id),
  });
};