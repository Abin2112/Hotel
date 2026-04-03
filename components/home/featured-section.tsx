'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FoodCard } from '@/components/food-card';
import { useLanguage } from '@/lib/language-context';
import type { MenuItemWithCategory } from '@/lib/db';

interface FeaturedSectionProps {
  items: MenuItemWithCategory[];
}

export function FeaturedSection({ items }: FeaturedSectionProps) {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            {language === 'en' ? 'Our Specials' : 'हमारे विशेष'}
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {language === 'en' ? 'Featured Dishes' : 'विशेष व्यंजन'}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === 'en'
              ? 'Discover our most loved dishes, prepared with authentic recipes and fresh ingredients'
              : 'हमारे सबसे पसंदीदा व्यंजनों की खोज करें, प्रामाणिक व्यंजनों और ताजी सामग्री के साथ तैयार'}
          </p>
        </motion.div>

        {/* Featured Items Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FoodCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="gap-2">
            <Link href="/menu">
              {language === 'en' ? 'View Full Menu' : 'पूरा मेन्यू देखें'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
