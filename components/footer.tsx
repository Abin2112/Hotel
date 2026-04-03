'use client';

import Link from 'next/link';
import { Phone, MapPin, Mail, UtensilsCrossed, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import Image from 'next/image';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
  src="/logo.png"
  alt="Purvanchal Dhaba Logo"
  width={60}
  height={60}
  className="rounded-full object-cover"
/>
              <div>
                <h3 className="font-serif text-lg font-bold">Purvanchal Dhaba</h3>
                <p className="text-xs text-secondary-foreground/70">& Family Restaurant</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              {t.about.story.slice(0, 150)}...
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-secondary-foreground/80 transition-colors hover:text-primary">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-secondary-foreground/80 transition-colors hover:text-primary">
                  {t.nav.menu}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground/80 transition-colors hover:text-primary">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-secondary-foreground/80 transition-colors hover:text-primary">
                  {t.nav.location}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-foreground/80 transition-colors hover:text-primary">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.contactInfo}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-secondary-foreground/80">{t.location.addressText}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:9415787936" className="text-secondary-foreground/80 hover:text-primary">
                  +91 9415787936
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:8009027126" className="text-secondary-foreground/80 hover:text-primary">
                  +91 8009027126
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-secondary-foreground/80">{t.contact.emailText}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-secondary-foreground/70">{t.location.timings}</p>
              <p className="font-semibold text-primary">{t.location.timingsText}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {currentYear} Purvanchal Dhaba & Family Restaurant. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
