'use client';

import { motion } from 'framer-motion';
import { Leaf, ChefHat, Users, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const features = [
  {
    icon: Leaf,
    titleEn: 'Pure Vegetarian',
    titleHi: 'शुद्ध शाकाहारी',
    descEn: '100% vegetarian food with no compromise on taste',
    descHi: 'स्वाद से कोई समझौता नहीं के साथ 100% शाकाहारी भोजन',
    color: 'bg-dhaba-green',
  },
  {
    icon: ChefHat,
    titleEn: 'Traditional Recipes',
    titleHi: 'पारंपरिक व्यंजन',
    descEn: 'Authentic recipes passed down through generations',
    descHi: 'पीढ़ियों से चले आ रहे प्रामाणिक व्यंजन',
    color: 'bg-primary',
  },
  {
    icon: Users,
    titleEn: 'Family Friendly',
    titleHi: 'परिवार के अनुकूल',
    descEn: 'Perfect dining experience for the whole family',
    descHi: 'पूरे परिवार के लिए उत्तम भोजन अनुभव',
    color: 'bg-dhaba-gold',
  },
  {
    icon: Heart,
    titleEn: 'Made with Love',
    titleHi: 'प्यार से बना',
    descEn: 'Every dish is prepared with care and passion',
    descHi: 'हर व्यंजन देखभाल और जुनून के साथ तैयार',
    color: 'bg-dhaba-red',
  },
];

export function HighlightsSection() {
  const { language } = useLanguage();

  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {language === 'en' ? 'Why Choose Us' : 'हमें क्यों चुनें'}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === 'en'
              ? 'Experience the authentic taste of highway dhaba with modern comfort'
              : 'आधुनिक आराम के साथ हाईवे ढाबा का प्रामाणिक स्वाद अनुभव करें'}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-card p-6 text-center shadow-lg"
            >
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${feature.color} text-white`}
              >
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                {language === 'en' ? feature.titleEn : feature.titleHi}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? feature.descEn : feature.descHi}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
