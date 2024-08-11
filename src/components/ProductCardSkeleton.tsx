import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-lg">
      <Skeleton className="w-full h-56 mb-4 rounded-xl" />
      <Skeleton className="w-1/2 h-4 mb-1" />
      <Skeleton className="w-3/4 h-6 mb-2" />
      <div className="flex items-center justify-between">
        <Skeleton className="w-1/4 h-5" />
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;