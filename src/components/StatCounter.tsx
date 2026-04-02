'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  value: string;
  label: string;
}

function parseNumericValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: value };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayNumber, setDisplayNumber] = useState(0);
  const { prefix, number, suffix } = parseNumericValue(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setDisplayNumber(number);
        clearInterval(timer);
      } else {
        setDisplayNumber(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, number]);

  const formattedNumber = Number.isInteger(number)
    ? Math.round(displayNumber).toLocaleString()
    : displayNumber.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-4xl font-bold text-teal sm:text-5xl">
        {prefix}
        {formattedNumber}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-gray-text sm:text-base">{label}</div>
    </motion.div>
  );
}
