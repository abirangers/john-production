import type { Cart } from '@/types/cart';
import dynamic from 'next/dynamic';
import React from 'react'

const CartContent = dynamic(() => import('@/components/CartContent'), {
  ssr: false
});

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