// Coupon / special-offer cards shown on /specials.
// Edit freely — this is the full list rendered as dashed-border coupon cards.
//
// Expiry dates are not written by hand. Each coupon names a schedule and the date
// is worked out in lib/coupon-expiry.ts: 'rolling' is the shared date every offer
// uses, 'furnace' is the same monthly roll restricted to heating season. The value
// below is the build-time snapshot; <CouponExpiry> refreshes it in the browser.

import { expiryFor, formatExpiry, type ExpiryKind } from '@/lib/coupon-expiry';

export type { ExpiryKind };

export type Coupon = {
  price: string; // big headline value, e.g. "$89", "FREE", "$75 OFF"
  title: string;
  details: string;
  expiryKind: ExpiryKind;
  expires: string;
};

const catalogue: Omit<Coupon, 'expires'>[] = [
  {
    price: '$89',
    title: 'Happy House Cooling Checkup',
    details: '+ Free Freon Leak Check + Stay Cool Guarantee. Original Price: $129.',
    expiryKind: 'rolling',
  },
  {
    price: '$98',
    title: 'Drain Unclog',
    details: 'Clear one slow or clogged drain. Camera inspection available.',
    expiryKind: 'rolling',
  },
  {
    price: 'FREE',
    title: 'Water Quality Test',
    details: 'On-site water test with any plumbing visit. No obligation.',
    expiryKind: 'rolling',
  },
  {
    price: '$75 OFF',
    title: 'Any Plumbing Repair',
    details: 'New customers save on their first qualifying plumbing repair.',
    expiryKind: 'rolling',
  },
  {
    price: '$59',
    title: 'Furnace Tune-Up',
    details: '21-point heating safety inspection before the cold sets in.',
    expiryKind: 'furnace',
  },
  {
    price: '$50 OFF',
    title: 'Any Electrical Service',
    details: 'Save on panel upgrades, EV chargers, lighting, and more.',
    expiryKind: 'rolling',
  },
];

export const coupons: Coupon[] = catalogue.map((c) => ({
  ...c,
  expires: formatExpiry(expiryFor(c.expiryKind)),
}));
