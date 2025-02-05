import React from "react";
import LinksDropdown from "./links-dropdown";
import ThemeToggle from "./theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-muted py-4 px-4 sm:px-16 lg:px-24 flex items-center justify-between">
      <div>
        <LinksDropdown />
      </div>

      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  );
}
