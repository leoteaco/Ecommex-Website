'use client';

import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  index?: number;
}

export function ProcessStep({ number, title, description, isLast = false, index = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Vertical line + circle */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-white font-display font-bold text-sm">
          {number}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gray-200 my-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? '' : ''}`}>
        <h3 className="font-display text-lg font-bold text-navy-dark">{title}</h3>
        <p className="mt-1 text-gray-text leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
