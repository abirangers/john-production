import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { type ClassValue, clsx } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return Number(price).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export const handleAddToCart = (e: React.MouseEvent, product: Product) => {
  e.preventDefault();

  const cart: Cart[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productExists: boolean = cart.some(
    (item: Cart) => item.id === product.id
  );

  if (productExists) {
    toast.error("Produk sudah ada di keranjang belanja");
  } else {
    const newCart = [...cart, { ...product, quantity: 1 }];
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(newCart));
      window.dispatchEvent(new Event("storage"));
    }
    toast.success("Produk berhasil ditambahkan ke keranjang belanja");
  }
};

export const getTimeBasedGreeting = () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Selamat pagi";
    } else if (hours < 18) {
        greeting = "Selamat siang";
    } else {
        greeting = "Selamat malam";
    }

    return greeting;
}
