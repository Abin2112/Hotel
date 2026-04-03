'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FoodCard } from '@/components/food-card';
import { useLanguage } from '@/lib/language-context';
import type { Category, MenuItemWithCategory } from '@/lib/db';

interface MenuContentProps {
  categories: Category[];
  menuItems: MenuItemWithCategory[];
}

export function MenuContent({ categories, menuItems }: MenuContentProps) {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    let items = menuItems;

    // Filter by category
    if (activeCategory !== 'all') {
      items = items.filter((item) => item.category_slug === activeCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name_en.toLowerCase().includes(query) ||
          item.name_hi.toLowerCase().includes(query)
      );
    }

    return items;
  }, [menuItems, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-2 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            {t.menuPage.title}
          </h1>
          <p className="text-lg text-muted-foreground">{t.menuPage.subtitle}</p>
        </motion.div>

        {/* Search + Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Search */}
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menuPage.searchPlaceholder}
              className="pl-10"
            />
          </div>

          {/* ✅ DOWNLOAD BUTTON (FINAL FIX) */}
          <Button asChild variant="outline" className="gap-2">
            <a href="/menu.pdf" download target="_blank">
              <Download className="h-4 w-4" />
              {t.menuPage.downloadMenu}
            </a>
          </Button>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          <Button
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('all')}
            className="rounded-full"
          >
            {t.menuPage.allCategories}
          </Button>

          {categories.map((category) => (
            <Button
              key={category.slug}
              variant={activeCategory === category.slug ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category.slug)}
              className="rounded-full"
            >
              {language === 'en' ? category.name_en : category.name_hi}
            </Button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item, index) => (
              <FoodCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-lg text-muted-foreground">
              {language === 'en' ? 'No dishes found' : 'कोई व्यंजन नहीं मिला'}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}