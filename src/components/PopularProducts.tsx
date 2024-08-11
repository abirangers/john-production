"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import PopularProductCards from "./PopularProductCards";

const PopularProducts = () => {
  return (
    <section id="popularProduct" className="px-8 pt-24">
      <div className="mb-8">
        <h2 className="mb-3 text-3xl font-bold leading-tight tracking-normal sm:mb-4 sm:text-4xl md:text-5xl">
          Popular Products
        </h2>
        <div className="flex justify-between">
          <p className="text-base font-normal sm:text-lg md:mb-4 text-muted-foreground">
            Explore our top-selling products.
          </p>
          <Link
            className="hidden text-base transition-all md:flex gap-x-1 hover:translate-x-1 hover:text-primary/80"
            href={"/products"}
          >
            Explore the collection <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <PopularProductCards />

      <Link
        href={"/products"}
        className={cn(
          buttonVariants(),
          "mx-auto text-center flex w-fit rounded-full gap-x-1"
        )}
      >
        View all products <ArrowRight />
      </Link>
    </section>
  );
};

export default PopularProducts;
