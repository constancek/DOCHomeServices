'use client';

// "Sharing Is Caring" social share row for blog posts. Each platform opens its
// share dialog in a new tab; Print uses the browser dialog (hence a client
// component). Brand colors match each platform.

const ICONS: Record<string, React.ReactNode> = {
  facebook: (
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96H15.83c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
  ),
  x: (
    <path d="M18.9 1.6h3.3l-7.2 8.24L23.7 22.4h-6.62l-5.18-6.78L5.97 22.4H2.66l7.7-8.8L2.3 1.6h6.8l4.68 6.19L18.9 1.6zm-1.16 18.83h1.83L7.05 3.47H5.08L17.74 20.43z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  ),
  pinterest: (
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.16-.1-.95-.2-2.4.04-3.44.22-.93 1.4-5.95 1.4-5.95s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 4-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.51 0-2.88-2.07-4.9-5.02-4.9-3.42 0-5.43 2.56-5.43 5.21 0 1.03.4 2.14.9 2.74.1.12.11.22.08.34l-.33 1.37c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.96 7.39 6.92 0 4.13-2.6 7.45-6.22 7.45-1.21 0-2.35-.63-2.74-1.38l-.75 2.84c-.27 1.04-1 2.35-1.49 3.15C9.57 23.82 10.76 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
  ),
  reddit: (
    <path d="M24 11.78a2.36 2.36 0 0 0-3.98-1.7 11.62 11.62 0 0 0-6.33-2.02l1.08-5.06 3.5.74a1.7 1.7 0 1 0 .18-.92l-3.9-.83a.42.42 0 0 0-.5.32l-1.2 5.64a11.63 11.63 0 0 0-6.42 2.03 2.36 2.36 0 1 0-2.6 3.85 4.65 4.65 0 0 0-.06.72c0 3.66 4.26 6.63 9.52 6.63s9.52-2.97 9.52-6.63c0-.24-.02-.48-.05-.72A2.36 2.36 0 0 0 24 11.78zM6.67 13.48a1.36 1.36 0 1 1 2.72 0 1.36 1.36 0 0 1-2.72 0zm7.6 3.6c-.93.93-2.7 1-3.22 1-.52 0-2.29-.07-3.22-1a.35.35 0 0 1 .5-.5c.59.6 1.85.8 2.72.8.87 0 2.13-.2 2.72-.8a.35.35 0 1 1 .5.5zm-.23-2.24a1.36 1.36 0 1 1 0-2.72 1.36 1.36 0 0 1 0 2.72z" />
  ),
  mail: (
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  ),
};

const PRINT_ICON = (
  <path
    d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v7H7z"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export default function ShareBar({ url, title }: { url: string; title: string }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { label: 'Share on Facebook', bg: '#1877F2', icon: 'facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { label: 'Share on X', bg: '#000000', icon: 'x', href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { label: 'Share on LinkedIn', bg: '#0A66C2', icon: 'linkedin', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: 'Share on Pinterest', bg: '#E60023', icon: 'pinterest', href: `https://pinterest.com/pin/create/button/?url=${u}&description=${t}` },
    { label: 'Share on Reddit', bg: '#FF4500', icon: 'reddit', href: `https://www.reddit.com/submit?url=${u}&title=${t}` },
    { label: 'Share by Email', bg: '#D14836', icon: 'mail', href: `mailto:?subject=${t}&body=${u}` },
  ];

  return (
    <div className="mt-12">
      <h2 className="flex items-center gap-3 font-display text-xl font-extrabold uppercase tracking-wide text-brand-700">
        Sharing Is Caring
        <span className="h-1 w-24 flex-shrink-0 rounded-full bg-pink-500" />
      </h2>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className="grid h-11 w-11 place-items-center rounded-md text-white transition hover:opacity-90"
            style={{ backgroundColor: l.bg }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              {ICONS[l.icon]}
            </svg>
          </a>
        ))}
        <button
          type="button"
          onClick={() => window.print()}
          aria-label="Print this article"
          className="grid h-11 w-11 place-items-center rounded-md bg-[#9ca3af] text-white transition hover:opacity-90"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            {PRINT_ICON}
          </svg>
        </button>
      </div>
    </div>
  );
}
