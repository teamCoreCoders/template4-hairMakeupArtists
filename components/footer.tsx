import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';

export function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <Link href="/" className="text-3xl font-light tracking-tight hover:text-primary transition-colors">
            Aria
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <Link href="/" className="text-sm font-light tracking-wide hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-light tracking-wide hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#portfolio" className="text-sm font-light tracking-wide hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-sm font-light tracking-wide hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10">
              <Instagram className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10">
              <Mail className="h-6 w-6" />
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground font-light">
              © 2024 Aria Beauty. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}