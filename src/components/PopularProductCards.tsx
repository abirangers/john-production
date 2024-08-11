import { useProductsQuery } from '@/services/queries/product.query';
import React from 'react'
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';
import { getProducts } from '@/services/api/product.service';

const PopularProductCards = async () => {
    const products = await getProducts({ search: "", category: "" });

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-[72px]">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default PopularProductCards