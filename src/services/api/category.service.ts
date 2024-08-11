import { api } from "@/lib/api";
import type { GetCategoriesResponse } from "@/types/category";

export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const { data } = await api.get<GetCategoriesResponse>(
    "/categories"
  );
  return data;
};