"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";

import { authClient } from "@/lib/auth-client";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Avatar } from '../ui/avatar';

export const Header = () => {
  const { data: session } = authClient.useSession();
  return (
    <header className="flex items-center justify-between p-5">
      <Image
        src="/chess-skate-shop-logo.svg"
        alt="Chess Skate Shop Header"
        width={100}
        height={26.14}
      />

      <div className="flex items-center">
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon">
                <MenuIcon />
              </Button>
            }
          />

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            {session?.user ? (
              <>
              <Avatar>
                
              </Avatar>
              </>
            )
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
