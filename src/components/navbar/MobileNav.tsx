import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { Button } from '../ui/button';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleRedirect = (path: string) => {
    setIsOpen(false);
    router.push(path);
  }

  return (
    <div className="flex md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <div>
            <Logo />
            <div className="mt-5 text-sm">
              <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Lobby</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col text-muted-foreground gap-y-2">
                      <span className='cursor-pointer' onClick={() => handleRedirect('/products')}>Products</span>
                      <span className='cursor-pointer' onClick={() => handleRedirect('/#category')}>Categories</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col text-muted-foreground gap-y-2">
                      <span className='cursor-pointer' onClick={() => handleRedirect('/products?category=bed')}>Bed</span>
                      <span className='cursor-pointer' onClick={() => handleRedirect('/products?category=cabinet')}>Cabinet</span>
                      <span className='cursor-pointer' onClick={() => handleRedirect('/products?category=trolley')}>Trolley</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav