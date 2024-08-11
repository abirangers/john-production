"use client";

import React from 'react'
import ProductCard from './ProductCard';
import { useProductsQuery } from '@/services/queries/product.query';
import ProductCardSkeleton from './ProductCardSkeleton';

const PopularProductCards = () => {
    const { data: products, isLoading } = useProductsQuery({search: "", category: ""});

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-[72px]">
                {[...Array(4)].map((_, i) => (
                    <ProductCardSkeleton key={i} />
                ))}
            </div>
        )
    }

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-[72px]">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default PopularProductCards