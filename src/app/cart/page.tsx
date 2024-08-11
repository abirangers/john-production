import CartContent from '@/components/CartContent';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import type { Cart } from '@/types/cart';
import React, { useState, useEffect } from 'react'

const Cart = () => {
  return (
    <section className="px-8 py-8">
      <h1 className="mb-8 text-4xl font-bold leading-tight text-center">
        Shopping Cart
      </h1>

    <CartContent />
    </section>
  );
}

export default Cart