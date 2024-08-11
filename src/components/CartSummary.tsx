import { formatPrice } from '@/lib/utils'
import React from 'react'
import { Button } from './ui/button'
import { Cart } from '@/types/cart'

const CartSummary = ({ orderTotal, handleSubmit, cart, isDisabled }: { orderTotal: number, handleSubmit: () => void, cart: Cart[], isDisabled: boolean }) => {
  return (
    <div className="p-8 bg-white border rounded-md shadow-sm">
                <h2 className="mb-6 text-lg font-medium text-center">
                    Order Summary
                </h2>
                <hr />
                <div className="flex justify-between my-4">
                    <h3 className="text-base font-medium">
                        Order total
                    </h3>
                    <h3 className="text-base font-normal">
                        {isNaN(orderTotal) ? formatPrice(0) : formatPrice(orderTotal)}
                    </h3>
                </div>
                <Button
                    onClick={handleSubmit}
                    className="w-full"
                    disabled={cart.length < 1 || isDisabled}
                >
                    Order Now
                </Button>
            </div>
  )
}

export default CartSummary