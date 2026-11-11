import type { ReactNode, SVGProps } from 'react';

export type IconName =
  | 'snowflake'
  | 'flame'
  | 'droplet'
  | 'bolt'
  | 'phone'
  | 'calendar'
  | 'star'
  | 'shield'
  | 'clock'
  | 'badge'
  | 'heart'
  | 'arrow'
  | 'check'
  | 'menu'
  | 'close'
  | 'quote'
  | 'play'
  | 'chevron'
  | 'caretDown'
  | 'mail'
  | 'pin'
  | 'house'
  | 'paw'
  | 'doc'
  | 'estimate'
  | 'calendarClock'
  | 'tag'
  | 'noFee'
  | 'card'
  | 'facebook'
  | 'gauge'
  | 'pump'
  | 'radiator'
  | 'shower'
  | 'search'
  | 'virusOff'
  | 'lungs'
  | 'wind'
  | 'leaf'
  | 'certificate'
  | 'plugConnected'
  | 'fileDollar';

const paths: Record<IconName, ReactNode> = {
  // virusOff, lungs, wind, leaf, certificate, plugConnected and fileDollar: Tabler Icons (MIT), via the Iconify API.
  plugConnected: (
    <path d="m7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1-5-5zm10 0l-5-5l1.5-1.5a3.536 3.536 0 1 1 5 5zM3 21l2.5-2.5m13-13L21 3m-11 8l-2 2m5 1l-2 2" />
  ),
  fileDollar: (
    <>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
      <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H10m2 0v1m0-8v1" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 21c.5-4.5 2.5-8 7-10" />
      <path d="M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9c0 1 0 3 2 5z" />
    </>
  ),
  certificate: (
    <>
      <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
      <path d="M13 17.5V22l2-1.5l2 1.5v-4.5" />
      <path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2" />
    </>
  ),
  virusOff: (
    <path d="m3 3l18 18M8.469 8.46a5 5 0 0 0 7.058 7.084m1.386-2.608a5 5 0 0 0-5.826-5.853M12 7V3m-1 0h2m2.536 5.464l2.828-2.828m-.707-.707l1.414 1.414M17 12h4m0-1v2m-2.636 5.363l-.707.707M12 17v4m1 0h-2m-2.535-5.464l-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m2.636-5.363l-.707.707" />
  ),
  lungs: (
    <path d="M6.081 20C7.693 20 9 18.665 9 17.02V7.257C9 6.563 8.448 6 7.768 6c-.205 0-.405.052-.584.15l-.13.083C5.594 7.292 4.622 8.88 3.65 12.057q-.63 2.055-.648 4.775c-.012 1.675 1.261 3.054 2.877 3.161zm11.839 0C16.307 20 15 18.665 15 17.02V7.257C15 6.563 15.552 6 16.233 6c.204 0 .405.052.584.15l.13.083c1.46 1.059 2.432 2.647 3.405 5.824q.63 2.055.648 4.775c.012 1.675-1.261 3.054-2.878 3.161zM9 12a3 3 0 0 0 3-3a3 3 0 0 0 3 3m-3-8v5" />
  ),
  wind: (
    <path d="M5 8h8.5a2.5 2.5 0 1 0-2.34-3.24M3 12h15.5a2.5 2.5 0 1 1-2.34 3.24M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24" />
  ),
  gauge: (
    <>
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="M12 16l4-5" />
      <circle cx="12" cy="16" r="1.2" />
    </>
  ),
  pump: (
    <>
      <path d="M20.5 12a8.5 8.5 0 0 1-14.6 5.9" />
      <path d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9" />
      <path d="M18.5 2.5v4h-4M5.5 21.5v-4h4" />
    </>
  ),
  radiator: (
    <>
      <rect x="3" y="5" width="18" height="12.5" rx="1.5" />
      <path d="M7.5 5v12.5M12 5v12.5M16.5 5v12.5M5.5 17.5v2.5M18.5 17.5v2.5" />
    </>
  ),
  shower: (
    <>
      <path d="M4 21V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1" />
      <path d="M10 13a4 4 0 0 1 8 0z" />
      <path d="M11 16v1.5M14 16v1.5M17 16v1.5M12.5 19.5V21M15.5 19.5V21" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2v20M4.2 7l15.6 10M19.8 7L4.2 17" />
      <path d="M12 6l-2.5-2.5M12 6l2.5-2.5M12 18l-2.5 2.5M12 18l2.5 2.5" />
    </>
  ),
  flame: (
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  ),
  droplet: <path d="M12 2.5S5.5 9.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 9.5 12 2.5 12 2.5z" />,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  star: <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />,
  shield: <path d="M12 2.5 4 5.5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10v-6z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-5-5" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  quote: <path d="M7 7H4v6h3l-1 4h2l1-4V7zm9 0h-3v6h3l-1 4h2l1-4V7z" />,
  play: <path d="M8 5v14l11-7z" />,
  chevron: <path d="M9 6l6 6-6 6" />,
  caretDown: <path d="M6 9l6 6 6-6z" fill="currentColor" stroke="none" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  house: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  doc: (
    <>
      <path d="M6 2h7l5 5v15H6z" />
      <path d="M13 2v5h5" />
    </>
  ),
  estimate: (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 9.5v10M14.5 11h-3.25a1.75 1.75 0 0 0 0 3.5h1.5a1.75 1.75 0 0 1 0 3.5H9.5" />
    </>
  ),
  calendarClock: (
    <>
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4M8 2v4M3 10h5" />
      <circle cx="16" cy="16" r="6" />
      <path d="M16 14v2.3l1.5 1.2" />
    </>
  ),
  tag: (
    <>
      <path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z" />
      <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
    </>
  ),
  noFee: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.5v11M14.5 8.5h-3.25a1.75 1.75 0 0 0 0 3.5h1.5a1.75 1.75 0 0 1 0 3.5H9.5" />
      <path d="M5.6 5.6l12.8 12.8" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  paw: (
    <g fill="currentColor" stroke="none">
      <ellipse cx="12" cy="15.5" rx="4.3" ry="3.6" />
      <circle cx="6.3" cy="10" r="1.9" />
      <circle cx="9.8" cy="6.6" r="2" />
      <circle cx="14.2" cy="6.6" r="2" />
      <circle cx="17.7" cy="10" r="1.9" />
    </g>
  ),
};

export default function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
