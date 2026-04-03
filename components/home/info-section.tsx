'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export function InfoSection() {
  const { t, language } = useLanguage();

  const mapUrl =
    'https://www.google.com/maps/search/?api=1&query=NH-31+Talwal+Near+CNG+Petrol+Pump+Ghazipur+233302';

  const infoCards = [
    {
      icon: Clock,
      title: t.location.timings,
      content: t.location.timingsText,
      color: 'bg-primary',
    },
    {
      icon: MapPin,
      title: t.location.address,
      content: (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:underline transition"
        >
          NH-31 Talwal, Near CNG Petrol Pump <br />
          District Ghazipur, PIN - 233302
        </a>
      ),
      color: 'bg-dhaba-green',
    },
    {
      icon: Phone,
      title: t.location.contact,
      content: (
        <div className="flex flex-col gap-1">
          <a href="tel:9415787936" className="hover:text-primary transition">
            +91 9415787936
          </a>
          <a href="tel:8009027126" className="hover:text-primary transition">
            +91 8009027126
          </a>
        </div>
      ),
      color: 'bg-dhaba-gold',
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {language === 'en' ? 'Visit Us Today' : 'आज हमसे मिलें'}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === 'en'
              ? 'We are open 24 hours to serve you the best highway food experience'
              : 'हम आपको सर्वश्रेष्ठ हाईवे भोजन अनुभव देने के लिए 24 घंटे खुले हैं'}
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-card p-6 text-center shadow-lg"
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${card.color} text-white`}
              >
                <card.icon className="h-7 w-7" />
              </div>

              <h3 className="mb-2 font-semibold text-card-foreground">
                {card.title}
              </h3>

              <div className="text-muted-foreground">
                {card.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Get Directions */}
          <Button asChild size="lg" className="gap-2">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              {language === 'en'
                ? 'Get Directions'
                : 'दिशा-निर्देश प्राप्त करें'}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          {/* Call Now (Improved UI) */}
          <Button
  asChild
  size="lg"
  className="gap-2 bg-green-600 text-white hover:bg-green-700 shadow-lg"
>
  <a href="tel:9415787936">
    <Phone className="h-4 w-4" />
    Call
  </a>
</Button>
        </motion.div>
      </div>
    </section>
  );
}