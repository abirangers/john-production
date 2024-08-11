import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import FilterSheet from "@/components/FilterSheet";
import { Category } from "@/types/category";
import { useCategoriesQuery } from "@/services/queries/category.query";
import { useSearchParams } from "next/navigation";

interface SearchAndFilterProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  search,
  setSearch,
  category,
  setCategory,
}) => {

    const { data: categories, isLoading: isCategoriesLoading } =
    useCategoriesQuery();
  
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get("category") || "";
    setCategory(categoryParam);
  }, [searchParams, setCategory]);
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
      <Input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-64"
      />
      <FilterSheet categories={categories as Category[]} />
    </div>
  );
};

export default SearchAndFilter;
