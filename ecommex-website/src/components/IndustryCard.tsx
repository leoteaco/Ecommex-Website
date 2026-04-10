'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IndustryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  pain: string;
  cta: string;
  index?: number;
}

export function IndustryCard({ icon, title, description, pain, cta, index = 0 }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-navy-dark">{title}</h3>
      <p className="mt-2 text-sm text-gray-text">{description}</p>
      <div className="mt-4 rounded-lg bg-navy-dark/5 p-4">
        <p className="text-sm italic text-navy/70">{pain}</p>
      </div>
      <div className="mt-auto pt-6">
        <span className="text-sm font-semibold text-teal transition-colors group-hover:text-teal-dark">
          {cta} &rarr;
        </span>
      </div>
    </motion.div>
  );
}
