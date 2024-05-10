"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo, { MobileLogo } from "./Logo";
import { ThemeSwitcherButton } from "./ThemeSwitcherButton";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};

export default Navbar;

const items = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Transactions",
    link: "/transactions",
  },
  {
    label: "Manage",
    link: "/manage",
  },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden border-separate bg-background">
      <div className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]" side={"left"}>
            <Logo />
            <div className="flex flex-col gap-1 pt-4">
              {items?.map((item) => (
                <NavbarItem
                  key={item.label}
                  label={item.label}
                  link={item.link}
                  onClickCallback={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <MobileLogo />
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcherButton />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcherButton />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
};

const NavbarItem = ({
  link,
  label,
  onClickCallback,
}: {
  link: string;
  label: string;
  onClickCallback?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <div className="relative flex items-center">
      <Link
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-foreground"
        )}
        href={link}
        onClick={() => {
          if (onClickCallback) {
            onClickCallback();
          }
        }}
      >
        {label}
      </Link>
      {isActive && (
        <div className="hidden md:block absolute -bottom-[2px] left-1/2 h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground"></div>
      )}
    </div>
  );
};
