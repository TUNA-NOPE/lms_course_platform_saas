"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { BookMarkedIcon } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              prefetch={false}
              className="flex items-center gap-2.5 hover:opacity-90 transition-opacity shrink-0"
            >
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">
                  auto_stories
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-foreground">Open Market</span>
                <span className="text-xs font-semibold text-primary tracking-wider uppercase">Academy</span>
              </div>
            </Link>

            <SearchInput />
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <SignedIn>
              <nav>
                <Link
                  prefetch={false}
                  href="/my-courses"
                  className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
                >
                  <BookMarkedIcon className="h-4 w-4" />
                  <span className="hidden md:block">My Courses</span>
                </Link>
              </nav>
            </SignedIn>

            <DarkModeToggle />

            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="default">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
