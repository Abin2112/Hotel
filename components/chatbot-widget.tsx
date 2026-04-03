'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/lib/language-context';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  // Initialize with greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: t.chatbot.greeting,
          isBot: true,
        },
      ]);
    }
  }, [t.chatbot.greeting, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    const responses = t.chatbot.responses;

    // Location keywords
    if (
      lowerInput.includes('location') ||
      lowerInput.includes('address') ||
      lowerInput.includes('where') ||
      lowerInput.includes('कहाँ') ||
      lowerInput.includes('पता')
    ) {
      return responses.location;
    }

    // Timing keywords
    if (
      lowerInput.includes('time') ||
      lowerInput.includes('timing') ||
      lowerInput.includes('open') ||
      lowerInput.includes('close') ||
      lowerInput.includes('hours') ||
      lowerInput.includes('समय') ||
      lowerInput.includes('खुला')
    ) {
      return responses.timings;
    }

    // Menu keywords
    if (
      lowerInput.includes('menu') ||
      lowerInput.includes('food') ||
      lowerInput.includes('dish') ||
      lowerInput.includes('what do you serve') ||
      lowerInput.includes('मेन्यू') ||
      lowerInput.includes('खाना')
    ) {
      return responses.menu;
    }

    // Special dishes keywords
    if (
      lowerInput.includes('special') ||
      lowerInput.includes('best') ||
      lowerInput.includes('recommend') ||
      lowerInput.includes('popular') ||
      lowerInput.includes('famous') ||
      lowerInput.includes('विशेष') ||
      lowerInput.includes('बेस्ट')
    ) {
      return responses.specialDishes;
    }

    // Price keywords
    if (
      lowerInput.includes('price') ||
      lowerInput.includes('cost') ||
      lowerInput.includes('rate') ||
      lowerInput.includes('cheap') ||
      lowerInput.includes('expensive') ||
      lowerInput.includes('कीमत') ||
      lowerInput.includes('दाम')
    ) {
      return responses.prices;
    }

    // Contact keywords
    if (
      lowerInput.includes('contact') ||
      lowerInput.includes('call') ||
      lowerInput.includes('phone') ||
      lowerInput.includes('number') ||
      lowerInput.includes('reach') ||
      lowerInput.includes('संपर्क') ||
      lowerInput.includes('फोन')
    ) {
      return responses.contact;
    }

    // Veg keywords
    if (
      lowerInput.includes('veg') ||
      lowerInput.includes('vegetarian') ||
      lowerInput.includes('non-veg') ||
      lowerInput.includes('meat') ||
      lowerInput.includes('शाकाहारी') ||
      lowerInput.includes('मांसाहारी')
    ) {
      return responses.veg;
    }

    // Default response
    return responses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(input),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 ${
          isOpen ? 'hidden' : ''
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:w-[380px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <span className="font-semibold">{t.chatbot.title}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2 ${
                      message.isBot ? '' : 'flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                        message.isBot
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.isBot ? (
                        <Bot className="h-4 w-4" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                        message.isBot
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t.chatbot.placeholder}
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon" className="flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
