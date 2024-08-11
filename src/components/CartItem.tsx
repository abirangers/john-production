import { cn, formatPrice } from '@/lib/utils';
import { Cart } from '@/types/cart'
import Link from 'next/link';
import React from 'react'
import { buttonVariants } from './ui/button';
import Image from 'next/image';

const CartItem: React.FC<{ product: Cart, handleRemove: (id: number) => void }> = ({ product, handleRemove }) => {
  return (
    <div className="flex justify-between p-4 bg-white border rounded-lg shadow-sm">
            <div className="flex gap-x-4">
                <div className="w-24 h-24 rounded-md md:w-32 md:h-32">
                    <Image
                        src={`/images/product${product.id}.jpg`}
                        alt={product.title}
                        className="object-cover w-full h-full rounded-md"
                        width={96}
                        height={96}
                    />
                </div>
                <div>
                    <h2 className="text-base font-semibold md:text-lg">
                        {product.title}
                    </h2>
                    <p className="my-1 text-sm text-muted-foreground md:my-0 md:hidden">
                        {product.category.name}
                    </p>
                    <h3 className="text-base md:text-base">
                        {formatPrice(product.price)}
                    </h3>
                </div>
            </div>

            <p className="hidden text-sm text-muted-foreground md:block">
                {product.category.name}
            </p>

            <div>
                <span
                    onClick={() => handleRemove(product.id)}
                    className={cn(
                        buttonVariants({
                            variant: "outline",
                        }),
                        "w-8 h-8 leading-8 text-center rounded-full shadow-md cursor-pointer"
                    )}
                >
                    X
                </span>
            </div>
        </div>
  )
}

export default CartItem