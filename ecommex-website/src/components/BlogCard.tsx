'use client';

import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  index?: number;
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  featured = false,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 ${
        featured ? 'flex flex-col' : ''
      }`}
    >
      {/* Thumbnail placeholder */}
      <div
        className={`bg-gradient-to-br from-navy-dark to-navy ${
          featured ? 'h-48' : 'h-40'
        } flex items-center justify-center`}
      >
        <span className="text-sm text-gray-text">
          {/* TODO: Replace with real images */}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
            {category}
          </span>
          <span className="text-xs text-gray-text">
            {date} &middot; {readTime}
          </span>
        </div>
        <h3
          className={`font-display font-bold text-navy-dark transition-colors group-hover:text-teal ${
            featured ? 'text-xl' : 'text-lg'
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-text line-clamp-3">
          {excerpt}
        </p>
      </div>
    </motion.article>
  );
}
