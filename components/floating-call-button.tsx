'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

const phoneNumbers = [
  { number: '9415787936', display: '+91 9415787936' },
  { number: '8009027126', display: '+91 8009027126' },
];

export function FloatingCallButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 mb-2 overflow-hidden rounded-xl border border-border bg-card shadow-xl"
          >
            <div className="p-2">
              {phoneNumbers.map((phone, index) => (
                <a
                  key={phone.number}
                  href={`tel:${phone.number}`}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
                >
                  <Phone className="h-4 w-4 text-dhaba-green" />
                  {phone.display}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-dhaba-green text-white shadow-lg animate-pulse-glow"
        aria-label={isExpanded ? 'Close phone options' : 'Call us'}
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <Phone className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}
