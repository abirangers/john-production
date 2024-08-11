import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { useCategoriesQuery } from "@/services/queries/category.query";
import { Skeleton } from "./ui/skeleton";
import { getProducts } from "@/services/api/product.service";
import { getCategories } from "@/services/api/category.service";

const CategoryCard = async () => {
  const categories = await getCategories();

  return (
    <div className="grid gap-4 sm:grid-flow-col sm:grid-rows-2 md:grid-rows-1">
      {categories?.map((category, index) => (
        <Link
          key={index}
          href={`/products?category=${category.name.toLowerCase()}`}
          className="group"
        >
          <Card className="transition-all group-hover:bg-primary">
            <CardHeader>
              <CardImage
                src={`/images/${category.name.toLowerCase()}.png`}
                className="w-8 h-8 group-hover:filter group-hover:brightness-0 group-hover:invert"
                alt={category.name}
                width={32}
                height={32}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-primary mb-[6px] text-2xl font-semibold tracking-tight group-hover:text-primary-foreground">
                {category.name}
              </CardTitle>
              <CardDescription className="group-hover:text-primary-foreground">
                {category.products?.length} Product
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;
