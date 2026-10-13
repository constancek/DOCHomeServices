import { formatExpiryShort, rollingExpiry } from '@/lib/coupon-expiry';

// Why-choose benefits (icon list next to the intro video)
export const benefits = [
  {
    icon: 'house' as const,
    title: 'Family Owned and Operated',
    text: 'We are proud to be a local business that puts the community first.',
  },
  {
    icon: 'badge' as const,
    title: 'Experienced Team',
    text: 'Our team is fully certified, highly trained, and passionate about what they do.',
  },
  {
    icon: 'check' as const,
    title: 'Comprehensive Services',
    text: 'From minor repairs to full installations, we handle all residential needs.',
  },
  {
    icon: 'heart' as const,
    title: 'Customer First Approach',
    text: 'We focus on clear communication and friendly service every step of the way.',
  },
  {
    icon: 'star' as const,
    title: 'Satisfaction Guarantee',
    text: 'We are happy until you are happy — every job comes with a satisfaction guarantee.',
  },
];

// Trust-seal medallions (your own service promises — truthful and yours to show).
// If you have a REAL earned award, give me the badge image file and I'll swap a
// slot to an <img> instead.
export const awards: {
  icon: 'estimate' | 'calendarClock' | 'tag' | 'noFee' | 'card' | 'pin';
  label: string;
}[] = [
  { icon: 'estimate', label: 'Estimates' },
  { icon: 'calendarClock', label: 'Same-Day Service' },
  { icon: 'tag', label: 'Upfront Pricing' },
  { icon: 'noFee', label: 'No Overtime Fees' },
  { icon: 'card', label: 'Financing Available' },
  { icon: 'pin', label: 'Locally Owned' },
];

// Special offers carousel cards. Dates roll on the shared coupon schedule —
// see lib/coupon-expiry.ts.
export const offers = [
  {
    title: 'FREE',
    subtitle: 'Water Quality Test',
    detail: 'On-site test of your home water with any plumbing visit. No obligation.',
    expires: formatExpiryShort(rollingExpiry()),
  },
  {
    title: 'SAVE $75',
    subtitle: 'On Plumbing Repair',
    detail: 'New customers save on their first qualifying plumbing repair.',
    expires: formatExpiryShort(rollingExpiry()),
  },
  {
    title: '$89',
    subtitle: 'Furnace Tune-Up',
    detail: '21-point heating safety inspection before the cold sets in.',
    expires: formatExpiryShort(rollingExpiry()),
  },
];

// Membership club perks
export const clubPerks = [
  'Priority scheduling',
  'Up to 20% discounts',
  'Trusted professionals',
  'Reduced diagnostic fees',
  '100% guarantee',
];

// Financing bullet points
export const fundingPoints = [
  'Instant credit decision on approval',
  'Easy, quick application process',
  'No prepayment penalties',
];

// Service-area columns
export const serviceAreas = {
  left: ['Hamilton County, OH', 'Kenton County, KY', 'Campbell County, KY', 'Boone County, KY'],
  right: ['Clermont County, OH', 'Butler County, OH', 'Warren County, OH', 'Dearborn County, IN'],
};
