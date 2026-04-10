'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  role: string;
  index?: number;
}

export function TestimonialCard({ quote, name, company, role, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl border border-gray-200 bg-white p-8"
    >
      <div className="mb-4 text-teal text-3xl">&ldquo;</div>
      <p className="text-navy/80 leading-relaxed">{quote}</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-200" />
        <div>
          <div className="font-semibold text-navy-dark">{name}</div>
          <div className="text-sm text-gray-text">
            {role}, {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
