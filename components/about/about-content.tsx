'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, ChefHat, Users, Heart, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { ImageSlider } from './image-slider';

const images = [
  {
    src: 'https://res.cloudinary.com/dniaxogth/image/upload/q_auto/f_auto/v1775226812/hotel_main_2_qvy6c9.jpg',
    alt: 'Restaurant Interior',
  },
  {
    src: 'https://res.cloudinary.com/dniaxogth/image/upload/q_auto/f_auto/v1775226812/hotel_main_1_mr25dq.jpg',
    alt: 'Dining Area',
  },
  {
    src: 'https://res.cloudinary.com/dniaxogth/image/upload/q_auto/f_auto/v1775226811/hotel_main_3_vzouhe.jpg',
    alt: 'Restaurant Ambiance',
  },
  // {
  //   src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
  //   alt: 'Food Preparation',
  // },
];

export function AboutContent() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Leaf,
      title: t.about.features.freshIngredients,
      color: 'bg-dhaba-green',
    },
    {
      icon: ChefHat,
      title: t.about.features.traditionalRecipes,
      color: 'bg-primary',
    },
    {
      icon: Users,
      title: t.about.features.familyFriendly,
      color: 'bg-dhaba-gold',
    },
    {
      icon: Heart,
      title: t.about.features.pureVegetarian,
      color: 'bg-dhaba-red',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
              <UtensilsCrossed className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
              {t.about.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://res.cloudinary.com/dniaxogth/image/upload/q_auto/f_auto/v1775226561/hotelmain_ga0qno.jpg"
                  alt="Our Restaurant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {t.about.subtitle}
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                Purvanchal Dhaba & Family Restaurant
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">{t.about.story}</p>

              <h3 className="mb-4 text-xl font-semibold text-foreground">{t.about.mission}</h3>
              <p className="leading-relaxed text-muted-foreground">{t.about.missionText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-card p-6 text-center shadow-lg"
              >
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${feature.color} text-white`}
                >
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">{t.about.glimpses}</h2>
            <p className="text-muted-foreground">
              {language === 'en'
                ? 'Take a virtual tour of our restaurant'
                : 'हमारे रेस्टोरेंट की आभासी यात्रा करें'}
            </p>
          </motion.div>

          <ImageSlider images={images} />
        </div>
      </section>
    </div>
  );
}
