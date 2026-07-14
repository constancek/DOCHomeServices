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
    name: 'Diane Whitaker',
    location: 'Cincinnati, OH',
    rating: 5,
    quote:
      'My experience with Cincy Degree of Comfort was outstanding. They responded quickly, carefully inspected the issue, and used cameras to show me exactly what was happening inside the pipes before and after the repair. Their team was reliable, fair, hardworking, and completely transparent throughout the entire process.',
    video: '/videos/testimonial-4.mp4',
    poster: '/videos/testimonial-4-poster.jpg',
  },
  {
    id: 'testimonial-1',
    name: 'Megan Sullivan',
    location: 'Erlanger, KY',
    rating: 5,
    quote:
      'From the moment I called Cincy Degree of Comfort, everything was perfect. They arrived at my home quickly, communicated clearly every step of the way, and were honest and realistic about my options. The entire experience was smooth, professional, and exceeded my expectations.',
    video: '/videos/testimonial-1.mp4',
    poster: '/videos/testimonial-1-poster.jpg',
  },
  {
    id: 'testimonial-5',
    name: 'Darren & Maria',
    location: 'Boone County, KY',
    rating: 5,
    quote:
      'I’m a 26-year Army veteran. We live in a 1976 Rambler-style home, and after a flood, we decided it was time to make some improvements. From the very beginning, Cincy Degree of Comfort impressed us with their knowledge and professionalism. They truly know what they’re talking about, and you can tell this isn’t just a job to them — they genuinely care about the people they serve. They treated our home as if it were their own, never pressured us into unnecessary work, and focused on providing honest service to honest people who simply want the job done right. You really can’t go wrong with them.',
    video: '/videos/testimonial-5.mp4',
    poster: '/videos/testimonial-5-poster.jpg',
  },
  // New videos go here — each one added below the previous new arrival, so the
  // two originals below stay at the bottom of the page.
  {
    id: 'testimonial-2',
    name: 'Rachel Bennett',
    location: 'Mason, OH',
    rating: 5,
    quote:
      'The service from them was fantastic. Both technicians were extremely professional, friendly, and respectful throughout the visit. They took the time to answer every question I had, explained everything clearly, and made sure I felt confident with the work being done.',
    video: '/videos/testimonial-2.mp4',
    poster: '/videos/testimonial-2-poster.jpg',
  },
  {
    id: 'testimonial-3',
    name: 'Laura Coleman',
    location: 'West Chester, OH',
    rating: 5,
    quote:
      'Working with Cincy Degree of Comfort was simple from start to finish. They handled all the paperwork, made the entire process easy and straightforward, and completed the job professionally. Their technicians did excellent work, and I couldn’t be happier with the overall experience.',
    video: '/videos/testimonial-3.mp4',
    poster: '/videos/testimonial-3-poster.jpg',
  },
];
