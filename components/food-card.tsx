'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import type { MenuItemWithCategory } from '@/lib/db';

interface FoodCardProps {
  item: MenuItemWithCategory;
  index?: number;
}

export function FoodCard({ item, index = 0 }: FoodCardProps) {
  const { language } = useLanguage();

  const name = language === 'en' ? item.name_en : item.name_hi;
  const categoryName = language === 'en' ? item.category_name_en : item.category_name_hi;

  // 🔥 Gradient per category (optional but looks amazing)
  const getGradient = () => {
    switch (item.category_slug) {
      case 'paneer':
        return 'from-orange-500 to-red-500';
      case 'dal':
        return 'from-yellow-400 to-orange-500';
      case 'rice':
        return 'from-green-400 to-emerald-600';
      case 'roti':
        return 'from-amber-400 to-yellow-600';
      case 'breakfast':
        return 'from-pink-500 to-orange-400';
      default:
        return 'from-orange-500 to-red-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
    >
      
      {/* 🔥 GRADIENT HEADER (NO IMAGE) */}
      <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${getGradient()}`}>
        
        {/* Veg Badge */}
        {item.is_veg && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-green-600 px-2 py-1 text-xs font-medium text-white">
            <Leaf className="h-3 w-3" />
          </div>
        )}

        {/* Featured Badge */}
        {item.is_featured && (
          <div className="absolute right-3 top-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
            Featured
          </div>
        )}

        {/* Dish Name */}
        <h3 className="px-4 text-center text-lg font-semibold text-white">
          {name}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <div className="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
          {categoryName}
        </div>

        <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ₹{item.price}
          </span>

          <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {item.is_veg ? 'Pure Veg' : 'Non-Veg'}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-transparent transition-all group-hover:ring-primary/30" />
    </motion.div>
  );
}