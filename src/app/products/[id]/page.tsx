"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatPrice, handleAddToCart } from "@/lib/utils";
import { useProductByIdQuery } from "@/services/queries/product.query";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import ProductDetailSkeleton from "@/components/ProductDetailSkeleton";

interface ProductDetailProps {
  params: { id: string };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const { id } = params;

  const { data: product, isLoading } = useProductByIdQuery(Number(id));

  if (isLoading) return <ProductDetailSkeleton />;

  return (
    <section className="px-4 py-8 mt-4 md:px-8">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
        {/* left */}
        <div className="w-full max-w-md flex-shrink-0 h-[448px] rounded-sm">
          <Image
            src={product?.image as string}
            alt={product?.title as string}
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-sm"
          />
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 pt-5">
          <div className="border-b pb-4">
            <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tighter text-primary md:text-4xl">
              {product?.title}
            </h1>
            <h2 className="mb-3 text-xl font-semibold leading-tight tracking-tighter md:text-2xl">
              {formatPrice(product?.price || 0)}
            </h2>
            <p className="mb-4 text-sm font-normal text-muted-foreground">
              {product?.category}
            </p>
          </div>
          <div className="pt-4">
            <h3 className="mb-2 text-base font-semibold leading-tight">
              Description:
            </h3>
            <p className="text-base font-normal text-muted-foreground">
              {product?.description}
            </p>
          </div>
          <Button
            onClick={(e) => handleAddToCart(e, product as Product)}
            className="mt-4 rounded-full gap-x-2"
          >
            Add to cart <ShoppingCart />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
