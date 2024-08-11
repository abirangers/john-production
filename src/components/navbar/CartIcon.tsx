"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { buttonVariants } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  const [totalCartItems, setTotalCartItems] = useState(0);

  const updateCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setTotalCartItems(cart.length);
  };

  useEffect(() => {
    updateCartItems();

    const handleStorageChange = () => {
      updateCartItems();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Link
      className={cn(
        buttonVariants({
          size: "sm",
          variant: "outline",
        }),
        "gap-x-1 rounded-full"
      )}
      aria-label="items-in-cart"
      href={"/cart"}
    >
      <ShoppingCart className="w-4 h-4" />
      {totalCartItems}
    </Link>
  );
};

export default CartIcon;
