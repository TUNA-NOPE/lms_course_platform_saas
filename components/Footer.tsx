"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* Brand Section - Always Full Width on Mobile */}
        <div className="text-center sm:text-left mb-8 sm:hidden">
          <Link href="/" className="inline-flex items-center space-x-2 mb-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight">Open Market Academy</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto mb-4">
            Empowering learners worldwide with accessible, high-quality education.
          </p>
          <div className="flex gap-5 justify-center">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Column - Hidden on Mobile, shown on larger screens */}
          <div className="hidden sm:block space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight">Open Market Academy</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering learners worldwide with accessible, high-quality education. Join our community and start your journey today.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Column 1 - Platform */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="font-semibold text-foreground tracking-wide uppercase text-sm">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#courses" className="hover:text-primary transition-colors">Browse Courses</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Instructors</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">For Business</Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 - Support */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="font-semibold text-foreground tracking-wide uppercase text-sm">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3 col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="font-semibold text-foreground tracking-wide uppercase text-sm">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest courses and updates.
            </p>
            <form className="flex flex-col sm:flex-row lg:flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-background border border-border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <button 
                type="submit"
                className="bg-primary text-primary-foreground text-sm font-medium py-2 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>&copy; 2025 Open Market Academy. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

