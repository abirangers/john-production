import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/category.service";
import type { GetCategoriesResponse } from "@/types/category";

export const useCategoriesQuery = () => {
    return useQuery<GetCategoriesResponse>({
      queryKey: ["getCategories"],
      queryFn: getCategories,
    });
};