import React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { getCategories } from '@/services/api/category.service';

const DesktopNav = async () => {
  const categories = await getCategories();

  return (
    <div className="hidden md:flex">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Lobby
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src="/images/logo.jpeg"
                        alt="logo"
                        width={26}
                        height={26}
                      />
                      <div className="mt-4 mb-2 text-sm font-medium">
                        John Production
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        High quality hospital equipment at competitive prices.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                      href="/products"
                    >
                      <div className="text-sm font-medium leading-none">
                        Products
                      </div>
                      <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                        All the products we have to offer
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                      href="/#category"
                    >
                      <div className="text-sm font-medium leading-none">
                        Categories
                      </div>
                      <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                        See all categories we have
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {categories.map((category) => (
                  <li key={category.id}>
                    <NavigationMenuLink asChild>
                    <a
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                      href={`/products?category=${category.name}`}
                    >
                      <div className="text-sm font-medium leading-none">
                        {category.name}
                      </div>
                      <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                        Explore the {category.name} category
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default DesktopNav