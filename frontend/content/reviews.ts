// Real customer reviews supplied by the client (reviews.txt). Review text is
// verbatim (encoding cleaned). The source reviews were posted anonymously; the
// client asked us to attach display names, so each carries a first name + last
// initial. The review wording itself is unchanged. Order is client-chosen.

import { videoTestimonials } from './videoTestimonials';

export type Review = {
  name: string;
  text: string;
  when: string;
  avatar?: string;
  videoHref?: string;
};

const writtenReviews: Review[] = [
  {
    name: 'Michael B.',
    text:
      'Jason and the entire team were efficient, courteous, and highly knowledgeable about the system they installed. They answered all of our questions and clearly explained how the water treatment system and heat pump water heater operate.',
    when: 'Posted a week ago',
  },
  {
    name: 'Rachel P.',
    text:
      'He quickly identified what he believed was causing the issue but still performed a complete inspection of the entire system to be certain. Not only did he resolve the problem, but he also took the time to explain the overall condition of my system. I was so impressed that I signed up for the service plan right away!',
    when: 'Posted a week ago',
  },
  {
    name: 'David L.',
    text:
      'Degree of Comfort provides outstanding service across the board. Maurice is an excellent technician, and every technician they’ve sent has been skilled and professional. They truly help make your home comfortable.',
    when: 'Posted a week ago',
  },
  {
    name: 'Sarah M.',
    text:
      'Alyssa was outstanding! She was both knowledgeable and approachable. It’s refreshing to see such professionalism from someone so young. Great job, Alyssa!',
    when: 'Posted in the last week',
  },
  {
    name: 'James T.',
    text: 'Joel was very professional and easy to work with.',
    when: 'Posted in the last week',
  },
  {
    name: 'Linda K.',
    text:
      'Excellent service! I really appreciated the expertise in making sure everything was functioning properly, including the plumbing, heating, AC, and electrical systems. Zack was professional, thorough, and exceptional. Every technician and representative I’ve dealt with has been excellent. Dakota carefully inspected my plumbing and discovered an issue I never would have noticed. I’ve consistently had positive experiences with Degree of Comfort!',
    when: 'Posted in the last week',
  },
  {
    name: 'Angela R.',
    text: 'Maurice consistently does excellent work every time he visits!',
    when: 'Posted a week ago',
  },
  {
    name: 'Tom H.',
    text: 'Austin was fantastic — friendly, informative, and easy to talk to.',
    when: 'Posted a week ago',
  },
  {
    name: 'Megan S.',
    text: 'Dakota was incredibly helpful and very friendly throughout the visit.',
    when: 'Posted a week ago',
  },
  {
    name: 'Chris W.',
    text: 'Professional, knowledgeable, and always willing to go above and beyond.',
    when: 'Posted a week ago',
  },
];

// The people who filmed a video testimonial also read as reviews, so their words
// are pulled straight from content/videoTestimonials.ts — add a video there and
// its review card appears here too. Names are shortened to match the written
// reviews above (first name + last initial); joint names are left alone.
function displayName(name: string): string {
  if (name.includes('&')) return name;
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2) return name;
  return `${parts.slice(0, -1).join(' ')} ${parts[parts.length - 1][0]}.`;
}

const videoReviews: Review[] = videoTestimonials.map((t) => ({
  name: displayName(t.name),
  text: t.quote,
  when: `${t.location} · Video testimonial`,
  avatar: t.avatar,
  videoHref: `/video-testimonials#${t.id}`,
}));

// Video reviews lead — a face and a playable clip carry more weight than text.
export const reviews: Review[] = [...videoReviews, ...writtenReviews];
