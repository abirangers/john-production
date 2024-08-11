import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import CategoryCard from "./CategoryCard";

const FeaturedCategories = () => {
  return (
    <section id="category" className="px-8 pt-24">
      <div className="mb-8">
        <h2 className="max-w-md mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-5xl leading-[1.1]">
          Featured Categories
        </h2>
        <div className="flex justify-between">
          <p className="font-normal leading-normal sm:text-lg md:mb-4 text-muted-foreground">
            Discover our top-rated hospital equipment.
          </p>
          <Link
            className="hidden text-base transition-all md:flex gap-x-1 hover:translate-x-1 hover:text-primary/80"
            href={"/products"}
          >
            Explore the collection <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <CategoryCard />

      
    </section>
  );
};

export default FeaturedCategories;
