"use client";

import ProductCard from "@/components/ProductCard";
import React, { useEffect, useMemo, useState, Suspense } from "react";
import { Input } from "@/components/ui/input";
import { useProductsQuery } from "@/services/queries/product.query";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { useDebounce } from "use-debounce";
import FilterSheet from "@/components/FilterSheet";
import { useCategoriesQuery } from "@/services/queries/category.query";
import { Category } from "@/types/category";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import SearchAndFilter from "@/components/SearchAndFilter";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [debounceSearch] = useDebounce(search, 500);
  
  const { data: products, isLoading: isProductsLoading } =
    useProductsQuery({ search: debounceSearch, category });
  

  return (
    <section className="px-8 pt-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Products ({products?.length || 0})
          </h2>
          <p className="text-sm md:text-base font-normal text-muted-foreground">
            Explore our top-selling products.
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchAndFilter search={search} setSearch={setSearch} category={category} setCategory={setCategory}/>
        </Suspense>
      </div>

        {isProductsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-[72px]">
            {[...Array(8)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : products?.length === 0 ? (
          <div>
            <p className="text-base font-normal text-muted-foreground">
              No products found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-[72px]">
            {products?.map((product, index) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
    </section>
  );
};

export default Products;
