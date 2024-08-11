import { Category } from "@/types/category";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const FilterSheet: React.FC<{categories: Category[]}> = ({categories}) => {
    const [open, setOpen] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();

    const selectedCategory = searchParams.get("category");

    const handleChangeCategory = (categoryName: string) => {
        setOpen(false);

    if (categoryName === selectedCategory) {
      return router.push('/products')
    }

    router.push(`/products?category=${categoryName}`);

    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
                className={cn(
                    buttonVariants({ size: "sm" }),
                    "flex items-center justify-center w-24 ml-auto"
                )}
            >
                <span className="mr-2">Filters</span>{" "}
                <Plus className="w-4 h-4" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="pb-4 border-b border-gray-300">
                        Categories
                    </SheetTitle>
                    <SheetDescription className="pt-3 mx-auto flex flex-wrap gap-2 justify-center">
                        {categories?.map((category, i) => (
                            <Button
                                key={i}
                                className="rounded-full"
                                variant={
                                    category.name.toLowerCase() ==
                                    selectedCategory
                                        ? "default"
                                        : "outline"
                                }
                                onClick={() =>
                                    handleChangeCategory(
                                        category.name.toLowerCase()
                                    )
                                }
                            >
                                {category.name}
                            </Button>
                        ))}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default FilterSheet;
