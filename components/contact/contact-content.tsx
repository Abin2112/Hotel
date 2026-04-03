'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function ContactContent() {
  const { t, language } = useLanguage();

  const contactCards = [
    {
      icon: Phone,
      title: t.contact.callUs,
      content: (
        <div className="space-y-2">
          <a
            href="tel:9415787936"
            className="block text-xl font-bold text-primary transition-colors hover:text-primary/80"
          >
            +91 9415787936
          </a>
          <a
            href="tel:8009027126"
            className="block text-xl font-bold text-primary transition-colors hover:text-primary/80"
          >
            +91 8009027126
          </a>
        </div>
      ),
      color: 'bg-primary',
    },
    {
      icon: MapPin,
      title: t.contact.visitUs,
      content: (
        <p className="text-muted-foreground">{t.location.addressText}</p>
      ),
      color: 'bg-dhaba-green',
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: (
        <a
          href="mailto:info@purvanchaldhaba.com"
          className="text-primary transition-colors hover:text-primary/80"
        >
          {t.contact.emailText}
        </a>
      ),
      color: 'bg-dhaba-gold',
    },
    {
      icon: Clock,
      title: t.location.timings,
      content: (
        <div>
          <p className="text-xl font-bold text-primary">{t.location.timingsText}</p>
          <p className="text-sm text-muted-foreground">
            {language === 'en' ? '7 days a week' : 'सप्ताह में 7 दिन'}
          </p>
        </div>
      ),
      color: 'bg-dhaba-red',
    },
  ];

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
              {t.contact.title}
            </h1>
            <p className="text-lg text-primary-foreground/80">{t.contact.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${card.color} text-white`}
                >
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">{card.title}</h3>
                {card.content}
              </motion.div>
            ))}
          </div>

          {/* Additional Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 rounded-2xl bg-muted p-8 text-center"
          >
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              {language === 'en' ? 'We would love to hear from you!' : 'हमें आपसे सुनना अच्छा लगेगा!'}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {language === 'en'
                ? 'Whether you have questions about our menu, want to make a reservation, or just want to say hello, feel free to reach out. We are always happy to help!'
                : 'चाहे आपके पास हमारे मेन्यू के बारे में सवाल हों, आरक्षण करना चाहते हों, या बस नमस्ते कहना चाहते हों, बेझिझक संपर्क करें। हम हमेशा मदद करने के लिए खुश हैं!'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
