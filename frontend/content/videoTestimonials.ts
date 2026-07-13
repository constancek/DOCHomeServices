// PLACEHOLDER COPY — names, locations and quotes below are dummy text.
// Replace each entry with the real customer details as they come in; the video
// and poster paths are the only fields that are final.
export type VideoTestimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  video: string;
  poster?: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'testimonial-4',
    name: 'Placeholder Name',
    location: 'Cincinnati, OH',
    rating: 5,
    quote:
      'Placeholder quote. The crew arrived when they said they would, walked me through the options before touching anything, and left the basement cleaner than they found it. The price I was quoted was the price I paid.',
    video: '/videos/testimonial-4.mp4',
    poster: '/videos/testimonial-4-poster.jpg',
  },
  {
    id: 'testimonial-1',
    name: 'Placeholder Name',
    location: 'Loveland, OH',
    rating: 5,
    quote:
      'Placeholder quote. Called on a Saturday morning expecting to wait until Monday, and someone was at the house that afternoon. They found the fault in about twenty minutes and had cold air back on the same visit.',
    video: '/videos/testimonial-1.mp4',
    poster: '/videos/testimonial-1-poster.jpg',
  },
  {
    id: 'testimonial-2',
    name: 'Placeholder Name',
    location: 'Mason, OH',
    rating: 5,
    quote:
      'Placeholder quote. They talked me out of the bigger unit I thought I needed and explained why it would have cost more to run. Straight answers, no pressure, and the install was done in a morning.',
    video: '/videos/testimonial-2.mp4',
    poster: '/videos/testimonial-2-poster.jpg',
  },
  {
    id: 'testimonial-3',
    name: 'Placeholder Name',
    location: 'West Chester, OH',
    rating: 5,
    quote:
      'Placeholder quote. Two other companies told me the line had to be dug up. These guys cleared it, put a camera down to show me it was clear, and charged me for the visit they actually made.',
    video: '/videos/testimonial-3.mp4',
    poster: '/videos/testimonial-3-poster.jpg',
  },
];
