"use client";

import { Cart } from "@/types/cart";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import toast from "react-hot-toast";
import { getTimeBasedGreeting } from "@/lib/utils";

const CartContent = () => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCheckout = () => {
    setIsDisabled(true);

    if (typeof window !== "undefined") {
      // Ambil data keranjang dari Local Storage
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      const timeMessage = getTimeBasedGreeting();

      let message = "Saya ingin memesan produk berikut:\n";

      cart.forEach((item: Cart) => {
        message += `- ${item.title} (${item.quantity})\n`;
        message += `- harga: ${item.price}\n\n`;
      });

      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/62895393384598?text=Hallo, ${timeMessage} \n ${encodedMessage}`;
      window.open(whatsappLink, "_blank");

      setIsDisabled(false);

      localStorage.removeItem("cart");
      setCart([]);
      toast.success("Checkout successful");
    }
  };

  const handleRemove = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(newCart));
      window.dispatchEvent(new Event("storage"));
    }
    toast.success("Item removed from cart");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(cart);
    }
  }, []);

  return (
    <div className="flex flex-col mt-12 gap-y-14 lg:flex-row gap-x-12">
      {/* Cart Item */}
      <div className="w-full space-y-5 lg:w-3/5">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              handleRemove={handleRemove}
            />
          ))
        )}
      </div>

      {/* right */}
      <div className="w-full lg:w-2/5">
        <CartSummary
          orderTotal={cart?.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
          cart={cart}
          handleSubmit={handleCheckout}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default CartContent;
