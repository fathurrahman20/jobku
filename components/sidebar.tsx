"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.svg";
import links from "@/utils/links";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <Link href="/">
        <Image src={Logo} alt="logo jobku" className="mx-auto" />
      </Link>
      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link) => (
          <Button
            asChild
            key={link.href}
            variant={pathname === link.href ? "default" : "link"}>
            <Link href={link.href} className="flex items-center gap-x-2">
              {link.icon}{" "}
              <span className="capitalize font-semibold">{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
}
