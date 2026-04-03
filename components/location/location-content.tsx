'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./leaflet-map'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center rounded-2xl bg-muted">
      <p className="text-muted-foreground">Loading map...</p>
    </div>
  ),
});

export function LocationContent() {
  const { t, language } = useLanguage();

  const openInMaps = () => {
  window.open(
    'https://www.google.com/maps/search/?api=1&query=NH-31+Talwal+Near+CNG+Petrol+Pump+Ghazipur+233302',
    '_blank'
  );
};

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
              {t.location.title}
            </h1>
            <p className="text-lg text-primary-foreground/80">{t.location.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Map and Info Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <LeafletMap />
              </div>
              <div className="mt-4 flex justify-center">
                <Button onClick={openInMaps} className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  {t.location.openInMaps}
                </Button>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Address Card */}
              <div className="rounded-2xl bg-card p-6 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{t.location.address}</h3>
                <p className="text-muted-foreground">
  NH-31 Talwal, Near CNG Petrol Pump <br />
  District Ghazipur, PIN - 233302
</p>
              </div>

              {/* Timings Card */}
              <div className="rounded-2xl bg-card p-6 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-dhaba-green text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{t.location.timings}</h3>
                <p className="text-xl font-bold text-primary">{t.location.timingsText}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {language === 'en' ? '7 days a week' : 'सप्ताह में 7 दिन'}
                </p>
              </div>

              {/* Contact Card */}
              <div className="rounded-2xl bg-card p-6 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-dhaba-gold text-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">{t.location.contact}</h3>
                <div className="space-y-2">
                  <a
                    href="tel:9415787936"
                    className="block text-lg font-medium text-primary hover:underline"
                  >
                    +91 9415787936
                  </a>
                  <a
                    href="tel:8009027126"
                    className="block text-lg font-medium text-primary hover:underline"
                  >
                    +91 8009027126
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
