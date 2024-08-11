"use client";

import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-3 border-b bg-background">
      <nav className="flex justify-between mx-6">
        {/*left navbar*/}
        <DesktopNav />
        <MobileNav />
        <CartIcon />
      </nav>
    </header>
  );
};

export default Navbar;
