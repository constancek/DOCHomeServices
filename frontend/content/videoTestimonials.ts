// The single source of truth for customer videos. Adding an entry here adds a
// row to /video-testimonials, a slide to the homepage carousel, and a review
// card on /reviews. The avatar is a face crop of the poster frame.
export type VideoTestimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  video: string;
  poster?: string;
  avatar?: string;
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
    avatar: '/videos/testimonial-4-avatar.jpg',
  },
  {
    id: 'testimonial-7',
    name: 'Dennis & Gail',
    location: 'Hamilton County, OH',
    rating: 5,
    quote:
      'We’ve lived in this home for 25 years, and one of the biggest advantages of choosing them was having every professional we needed under one roof. Instead of calling separate companies for an electrician, plumber, or HVAC technician, everything was handled by them. That gave us tremendous peace of mind. Working with them was a wonderful experience from beginning to end. The finished work turned out beautifully, and we couldn’t have been more pleased. We were truly ecstatic with the results and made sure to let the team know how much we appreciated their hard work. I highly recommend Cincy Degree of Comfort. If you want the job done right the first time, they’re the company to call.',
    video: '/videos/testimonial-7.mp4',
    poster: '/videos/testimonial-7-poster.jpg',
    avatar: '/videos/testimonial-7-avatar.jpg',
  },
  // New videos go here — each one added below the previous new arrival.
  {
    id: 'testimonial-6',
    name: 'Doug Ferguson',
    location: 'Butler County, OH',
    rating: 5,
    quote:
      'Hi, I’m Doug Ferguson, and I’m a retired Army veteran with 24 years of service. Our home was built in 1950, so over the years it’s needed plenty of improvements. One thing that has always impressed me about Cincy Degree of Comfort is their professionalism from the moment they arrive. Every technician lays down protective mats, wears shoe covers, and takes great care not to track anything through the house. When the job is finished, they make sure every area they worked in is spotless. I’ve never met a finer group of young professionals who are so qualified in heating, plumbing, and electrical work. If I were running a company, this is exactly the kind of team I would want. I have nothing but praise for them, and I know I can always trust their work.',
    video: '/videos/testimonial-6.mp4',
    poster: '/videos/testimonial-6-poster.jpg',
    avatar: '/videos/testimonial-6-avatar.jpg',
  },
  {
    id: 'testimonial-5',
    name: 'Darren & Maria',
    location: 'Boone County, KY',
    rating: 5,
    quote:
      'We live in a 1976 Rambler-style home, and after a flood, we decided it was time to make some improvements. From the very beginning, Cincy Degree of Comfort impressed us with their knowledge and professionalism. They truly know what they’re talking about, and you can tell this isn’t just a job to them — they genuinely care about the people they serve. They treated our home as if it were their own, never pressured us into unnecessary work, and focused on providing honest service to honest people who simply want the job done right. You really can’t go wrong with them.',
    video: '/videos/testimonial-5.mp4',
    poster: '/videos/testimonial-5-poster.jpg',
    avatar: '/videos/testimonial-5-avatar.jpg',
  },
  {
    id: 'testimonial-2',
    name: 'Rachel Bennett',
    location: 'Mason, OH',
    rating: 5,
    quote:
      'The service from them was fantastic. Both technicians were extremely professional, friendly, and respectful throughout the visit. They took the time to answer every question I had, explained everything clearly, and made sure I felt confident with the work being done.',
    video: '/videos/testimonial-2.mp4',
    poster: '/videos/testimonial-2-poster.jpg',
    avatar: '/videos/testimonial-2-avatar.jpg',
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
    avatar: '/videos/testimonial-3-avatar.jpg',
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
    avatar: '/videos/testimonial-1-avatar.jpg',
  },
];
