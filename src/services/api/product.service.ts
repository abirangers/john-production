import { api } from "@/lib/api";
import { GetProductResponse, GetProductsProps, Product } from "@/types/product";

export const getProducts = async (params: GetProductsProps): Promise<GetProductResponse> => {
    const { search, category } = params;
  const { data } = await api.get<GetProductResponse>("/products", {
    params: {
      search: search,
      category: category,
    },
  });
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
};