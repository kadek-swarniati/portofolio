'use client';

import Image from 'next/image';

const quote =
  "Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project's success.";

const testimonials = [
  {
    id: 1,
    name: 'Rafel Struick',
    role: 'CEO',
    avatar: '/images/testimonials/testimonial-avatar-01.png',
  },
  {
    id: 2,
    name: 'Rafel Struick',
    role: 'CEO',
    avatar: '/images/testimonials/testimonial-avatar-02.png',
  },
  {
    id: 3,
    name: 'Rafel Struick',
    role: 'CEO',
    avatar: '/images/testimonials/testimonial-avatar-03.png',
  },
  {
    id: 4,
    name: 'Rafel Struick',
    role: 'CEO',
    avatar: '/images/testimonials/testimonial-avatar-04.png',
  },
  {
    id: 5,
    name: 'Rafel Struick',
    role: 'CEO',
    avatar: '/images/testimonials/testimonial-avatar-05.png',
  },
  {
    id: 6,
    name: 'Rafel Struick',
    role: 'CEO',
    avatar: '/images/testimonials/testimonial-avatar-03.png',
  },
];

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({
  item,
  featured = false,
}: {
  item: Testimonial;
  featured?: boolean;
}) {
  return (
    <article
      className={`box-border flex h-[195px] w-[350px] min-w-[350px] shrink-0 flex-col overflow-hidden rounded-xl border bg-[#111111] p-5 text-white md:w-[400px] md:min-w-[400px] ${
        featured ? 'border-fuchsia-500' : 'border-white/5'
      }`}
    >
      <div className='mb-4 flex items-center gap-3'>
        <div className='h-12 w-12 shrink-0 overflow-hidden rounded-full bg-zinc-800'>
          <Image
            src={item.avatar}
            alt=''
            width={48}
            height={48}
            className='h-full w-full rounded-full object-cover'
          />
        </div>

        <div className='min-w-0'>
          <h3 className='text-sm font-bold text-white'>{item.name}</h3>
          <p className='mt-1 text-xs text-zinc-400'>{item.role}</p>
        </div>
      </div>

      <blockquote className='text-[13px] leading-6 text-zinc-400'>
        “{quote}”
      </blockquote>
    </article>
  );
}

function TestimonialRow({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) {
  return (
    <div className='w-full overflow-hidden'>
      <div
        className={`flex w-max flex-nowrap gap-4 ${
          reverse
            ? 'animate-[testimonialRight_38s_linear_infinite]'
            : 'animate-[testimonialLeft_34s_linear_infinite]'
        } hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {[...items, ...items].map((item, index) => (
          <TestimonialCard
            key={`${item.id}-${index}`}
            item={item}
            featured={item.id === 2}
          />
        ))}
      </div>
    </div>
  );
}

export default function AnimatedTestimonials() {
  return (
    <section
      id='testimonials'
      className='relative w-full overflow-hidden bg-[#030205] py-20 text-white md:py-24'
    >
      <div className='relative z-10 mx-auto mb-12 max-w-3xl px-5 text-center'>
        <h2 className='mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl'>
          What People Say About Me
        </h2>

        <p className='text-sm leading-7 text-zinc-400'>
          Hear from clients and colleagues about their experiences working with
          me.
        </p>
      </div>

      <div className='relative space-y-4 overflow-hidden'>
        <TestimonialRow items={testimonials.slice(0, 3)} />

        <TestimonialRow items={testimonials.slice(3, 6)} reverse />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#030205] to-transparent md:w-64'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#030205] to-transparent md:w-64'
        />
      </div>

      <style jsx>{`
        @keyframes testimonialLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes testimonialRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
