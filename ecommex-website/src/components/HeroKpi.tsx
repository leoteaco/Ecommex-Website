'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface HeroKpiProps {
  value: string;
  display: string;
  label: string;
}

export function HeroKpi({ value, display, label }: HeroKpiProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [done, setDone] = useState(false);
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  const prefix = match?.[1] ?? '';
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? '';
  const isK = display.includes('K');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 50;
    const inc = target / steps;
    let val = 0;
    const timer = setInterval(() => {
      val += inc;
      if (val >= target) {
        setCurrent(target);
        setDone(true);
        clearInterval(timer);
      } else {
        setCurrent(val);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const formatted = done
    ? display
    : `${prefix}${isK ? Math.round(current / 1000) + 'K' : Number.isInteger(target) ? Math.round(current).toLocaleString() : current.toFixed(1)}${suffix}`;

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-bold text-teal font-display">{formatted}</div>
      <div className="text-xs text-gray-text mt-0.5">{label}</div>
    </div>
  );
}
