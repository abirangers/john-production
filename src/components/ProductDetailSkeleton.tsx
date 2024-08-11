import React from 'react'
import { Skeleton } from './ui/skeleton'

const ProductDetailSkeleton = () => {
  return (
    <section className="px-4 py-8 mt-4 md:px-8">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
        {/* left */}
        <div className="w-full max-w-md flex-shrink-0 h-[448px] rounded-sm">
          <Skeleton className="object-cover w-full h-full rounded-sm" />
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 pt-5">
          <div className="border-b pb-4">
            <Skeleton className="mb-2 h-10 w-3/4" />
            <Skeleton className="mb-3 h-8 w-1/2" />
            <Skeleton className="mb-4 h-4 w-1/4" />
          </div>
          <div className="pt-4">
            <Skeleton className="mb-2 h-6 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
          <Skeleton className="mt-4 h-10 w-1/4 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default ProductDetailSkeleton