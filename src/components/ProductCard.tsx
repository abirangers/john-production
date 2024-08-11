import { formatPrice, handleAddToCart } from "@/lib/utils";
import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="p-4 transition-all bg-white border rounded-lg shadow-lg hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <Image
          src={`/images/product${product.id}.jpg`}
          alt={product.title}
          className="object-cover w-full mb-4 rounded-xl h-60"
          width={100}
          height={100}
        />
        <p className="mb-1 text-sm font-medium text-muted-foreground">
          {product.category}
        </p>
        <h2 className="mb-2 text-lg font-semibold">{product.title}</h2>
      </Link>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">
          {formatPrice(product.price)}
        </h3>
        <div className="group">
          <div
            onClick={(e) => handleAddToCart(e, product)}
            className="p-2 transition-all bg-gray-100 border rounded-full shadow-md group-hover:bg-primary cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5 text-primary group-hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
