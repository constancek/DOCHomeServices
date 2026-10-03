'use client';

import { useEffect, useState } from 'react';
import { expiryFor, formatExpiry, formatExpiryShort, type ExpiryKind } from '@/lib/coupon-expiry';

// The date baked into the HTML at build time is right until the next roll. This
// recomputes it in the browser so a page served from the CDN weeks after the last
// deploy never shows a deadline that has already passed.
//
// First render deliberately uses `initial` so it matches the pre-rendered markup;
// the effect corrects it straight after hydration.
export default function CouponExpiry({
  kind,
  initial,
  short = false,
}: {
  kind: ExpiryKind;
  initial: string;
  short?: boolean;
}) {
  const [expires, setExpires] = useState(initial);

  useEffect(() => {
    const current = () => {
      const date = expiryFor(kind);
      return short ? formatExpiryShort(date) : formatExpiry(date);
    };
    setExpires(current());
    // Re-check hourly so a tab left open across the roll point catches up too.
    const id = setInterval(() => setExpires(current()), 3_600_000);
    return () => clearInterval(id);
  }, [kind, short]);

  return <>{expires}</>;
}
