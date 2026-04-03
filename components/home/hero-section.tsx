'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, UtensilsCrossed, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              <Leaf className="h-4 w-4" />
              100% Pure Vegetarian
            </motion.div>

            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 flex items-center justify-center gap-3 lg:justify-start"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg">
                <UtensilsCrossed className="h-8 w-8 text-primary-foreground" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-2 font-serif text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl"
            >
              Purvanchal Dhaba
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-4 text-xl font-medium text-dhaba-gold sm:text-2xl"
            >
              & Family Restaurant
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-4 text-lg text-primary-foreground/80"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-8 text-primary-foreground/70"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/menu">
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
  asChild
  size="lg"
  className="gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:border-white transition"
>
  <a href="tel:9415787936">
    <Phone className="h-4 w-4" />
    {t.hero.callNow}
  </a>
</Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-lg">
              {/* Decorative circles */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-dhaba-gold/30 blur-3xl" />
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=800&fit=crop"
                  alt="Delicious Indian Food"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating food items */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-6 top-10 h-24 w-24 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop"
                  alt="Paneer Dish"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -right-6 bottom-20 h-24 w-24 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=200&h=200&fit=crop"
                  alt="Dal Dish"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute -right-2 top-1/4 h-20 w-20 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=200&h=200&fit=crop"
                  alt="Roti"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
