'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  variant?: 'light' | 'dark' | 'teal' | 'gray';
  className?: string;
  id?: string;
}

const bgMap = {
  light: 'bg-white text-navy',
  dark: 'bg-navy-dark text-white',
  teal: 'bg-teal text-white',
  gray: 'bg-gray-50 text-navy',
};

export function SectionWrapper({
  children,
  variant = 'light',
  className = '',
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${bgMap[variant]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
