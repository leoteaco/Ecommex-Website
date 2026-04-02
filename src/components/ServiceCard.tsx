'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bullets: string[];
  index?: number;
}

export function ServiceCard({ icon, title, description, bullets, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-navy-dark">{title}</h3>
      <p className="mt-2 text-gray-text">{description}</p>
      <ul className="mt-4 space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-navy/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
