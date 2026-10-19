'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

// Reveals a block the first time it scrolls into view. Children read the
// `shown` flag to animate themselves, so one observer can drive a staggered
// sequence (words of a heading, then photos one by one). Visitors who ask for
// reduced motion see everything at once.
export default function RevealGroup({
  children,
  className = '',
}: {
  children: (shown: boolean) => ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children(shown)}
    </div>
  );
}
