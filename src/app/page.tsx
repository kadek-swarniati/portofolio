'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  Menu,
  Send,
  X,
  CalendarDays,
  Building2,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  profile,
  statistics,
  careers,
  skills,
  faqs,
  advantages,
  projects,
  testimonials,
} from '@/data/portfolio';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

function Heading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className='mb-12 text-center'>
      <h2 className='section-title'>{title}</h2>
      {subtitle && <p className='section-subtitle'>{subtitle}</p>}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* DESKTOP AND MOBILE NAVBAR */}
      <header className='absolute inset-x-0 top-0 z-40'>
        <div className='container-main flex h-24 items-center justify-between'>
          {/* FIGMA LOGO */}
          <a
            href='#home'
            aria-label='Swarni Portfolio — Go to homepage'
            className='flex h-10 w-10 shrink-0 items-center justify-center'
          >
            <Image
              src='/images/logo.png'
              alt='Swarni Portfolio Logo'
              width={40}
              height={40}
              priority
              className='block h-10 w-10 object-contain'
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label='Main navigation'
            className='hidden items-center gap-9 md:flex'
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='text-xs text-zinc-300 transition-colors hover:text-fuchsia-400'
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP HIRE ME BUTTON */}
          <a
            href='#contact'
            className='gradient-button hidden text-xs md:inline-flex'
          >
            <Mail size={15} />
            Hire Me
          </a>

          {/* MOBILE ACTIONS */}
          <div className='flex items-center gap-3 md:hidden'>
            <a
              href='#contact'
              aria-label='Go to contact section'
              className='gradient-button p-3'
            >
              <Mail size={17} />
            </a>

            <button
              type='button'
              aria-label={
                menuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={menuOpen}
              aria-controls='mobile-navigation'
              onClick={() => setMenuOpen(!menuOpen)}
              className='rounded-lg p-2 text-white'
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION OVERLAY */}
      {menuOpen && (
        <div
          id='mobile-navigation'
          className='fixed inset-0 z-50 overflow-y-auto bg-black p-7 md:hidden'
        >
          <div className='mb-12 flex items-center justify-between'>
            {/* FIGMA LOGO IN MOBILE MENU */}
            <a
              href='#home'
              onClick={() => setMenuOpen(false)}
              aria-label='Swarni Portfolio — Go to homepage'
              className='flex h-10 w-10 items-center justify-center'
            >
              <Image
                src='/images/logo.png'
                alt='Swarni Portfolio Logo'
                width={40}
                height={40}
                className='block h-10 w-10 object-contain'
              />
            </a>

            <button
              type='button'
              aria-label='Close navigation menu'
              onClick={() => setMenuOpen(false)}
              className='rounded-lg p-2 text-white'
            >
              <X size={26} />
            </button>
          </div>

          {/* MOBILE NAVIGATION LINKS */}
          <nav aria-label='Mobile navigation' className='flex flex-col gap-8'>
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className='text-base text-white transition-colors hover:text-fuchsia-400'
              >
                {item.label}
              </a>
            ))}

            <a
              href='#contact'
              onClick={() => setMenuOpen(false)}
              className='gradient-button'
            >
              <Mail size={16} />
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

/*
 * Uses the exported Figma wave asset.
 * The PNG is 1440 × 381 and has transparency.
 * No reconstructed SVG paths are needed.
 */

function Waves() {
  return (
    <div className='hero-waves' aria-hidden='true'>
      <svg
        viewBox='0 0 1440 381'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
        role='presentation'
      >
        <defs>
          {/* Top layer: dark purple */}
          <linearGradient id='waveTop' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#28113F' />
            <stop offset='55%' stopColor='#31164D' />
            <stop offset='100%' stopColor='#3B1A5D' />
          </linearGradient>

          {/* Second layer: brighter purple */}
          <linearGradient id='waveSecond' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#512580' />
            <stop offset='50%' stopColor='#482171' />
            <stop offset='100%' stopColor='#3B1A60' />
          </linearGradient>

          {/* Third layer: deep purple */}
          <linearGradient id='waveThird' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#3C1B61' />
            <stop offset='55%' stopColor='#29133F' />
            <stop offset='100%' stopColor='#190D29' />
          </linearGradient>

          {/* Bottom fade */}
          <linearGradient id='waveBottom' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#26113D' />
            <stop offset='45%' stopColor='#170C25' />
            <stop offset='100%' stopColor='#030305' />
          </linearGradient>

          {/* Subtle ambient glow */}
          <linearGradient id='waveGlow' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#8B45D5' stopOpacity='0.12' />
            <stop offset='100%' stopColor='#8B45D5' stopOpacity='0' />
          </linearGradient>
        </defs>

        {/*
          Wave 1
          Gentle repeating curves with a 240px period.
          Approximately six crests across 1440px.
        */}
        <path
          d='
            M 0 150
            C 40 135, 80 135, 120 150
            S 200 165, 240 150
            S 320 135, 360 150
            S 440 165, 480 150
            S 560 135, 600 150
            S 680 165, 720 150
            S 800 135, 840 150
            S 920 165, 960 150
            S 1040 135, 1080 150
            S 1160 165, 1200 150
            S 1280 135, 1320 150
            S 1400 165, 1440 150
            L 1440 381
            L 0 381
            Z
          '
          fill='url(#waveTop)'
        />

        {/*
          Wave 2
          Brighter middle ribbon.
        */}
        <path
          d='
            M 0 205
            C 40 190, 80 190, 120 205
            S 200 220, 240 205
            S 320 190, 360 205
            S 440 220, 480 205
            S 560 190, 600 205
            S 680 220, 720 205
            S 800 190, 840 205
            S 920 220, 960 205
            S 1040 190, 1080 205
            S 1160 220, 1200 205
            S 1280 190, 1320 205
            S 1400 220, 1440 205
            L 1440 381
            L 0 381
            Z
          '
          fill='url(#waveSecond)'
        />

        {/*
          Wave 3
          Lower, darker ribbon.
        */}
        <path
          d='
            M 0 260
            C 40 245, 80 245, 120 260
            S 200 275, 240 260
            S 320 245, 360 260
            S 440 275, 480 260
            S 560 245, 600 260
            S 680 275, 720 260
            S 800 245, 840 260
            S 920 275, 960 260
            S 1040 245, 1080 260
            S 1160 275, 1200 260
            S 1280 245, 1320 260
            S 1400 275, 1440 260
            L 1440 381
            L 0 381
            Z
          '
          fill='url(#waveThird)'
        />

        {/*
          Wave 4
          Bottom transition into dark background.
        */}
        <path
          d='
            M 0 315
            C 40 300, 80 300, 120 315
            S 200 330, 240 315
            S 320 300, 360 315
            S 440 330, 480 315
            S 560 300, 600 315
            S 680 330, 720 315
            S 800 300, 840 315
            S 920 330, 960 315
            S 1040 300, 1080 315
            S 1160 330, 1200 315
            S 1280 300, 1320 315
            S 1400 330, 1440 315
            L 1440 381
            L 0 381
            Z
          '
          fill='url(#waveBottom)'
        />

        {/* Soft glow on the brighter ribbon */}
        <path
          d='
            M 0 205
            C 40 190, 80 190, 120 205
            S 200 220, 240 205
            S 320 190, 360 205
            S 440 220, 480 205
            S 560 190, 600 205
            S 680 220, 720 205
            S 800 190, 840 205
            S 920 220, 960 205
            S 1040 190, 1080 205
            S 1160 220, 1200 205
            S 1280 190, 1320 205
            S 1400 220, 1440 205
            L 1440 265
            L 0 265
            Z
          '
          fill='url(#waveGlow)'
        />
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section id='home' className='hero'>
      <div className='hero-grid' aria-hidden='true' />

      <div className='hero-stars' aria-hidden='true'>
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <Navbar />

      <div className='container-main hero-content'>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className='hero-badge'>
            <span aria-hidden='true'>🟡</span>
            Kadek&apos;s Portfolio
          </div>

          <h1 className='hero-heading'>
            I am a <span className='gradient-text'>{profile.headline}</span>
            {profile.secondHeadline && (
              <>
                <br className='hidden md:block' /> {profile.secondHeadline}
              </>
            )}
          </h1>

          <p className='hero-description'>{profile.introduction}</p>

          <a href='#projects' className='gradient-button text-sm'>
            View Portfolio
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>

      <Waves />
    </section>
  );
}

function About() {
  return (
    <section id='about' className='container-main about-section pb-20'>
      <div className='about-photo'>
        <Image
          src='/images/profile-kadek.png'
          alt='Portrait of Kadek Swarniati'
          width={850}
          height={1000}
          priority
          unoptimized
          className='about-portrait'
        />
      </div>

      <div className='mt-16 grid gap-8 md:grid-cols-[1fr_1.5fr]'>
        <h2 className='section-title'>Who am I?</h2>
        <p className='text-sm leading-8 text-zinc-400'>{profile.about}</p>
      </div>

      <div className='mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-7'>
        {statistics.map((stat, index) => (
          <div
            key={stat.label}
            className={`stat-circle ${index % 2 === 1 ? 'filled' : ''}`}
          >
            <strong className='text-3xl font-extrabold md:text-4xl'>
              {stat.value}
            </strong>
            <span className='mt-2 px-2 text-center text-xs'>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Career() {
  return (
    <section id='career' className='section container-main'>
      <Heading
        title='Career Journey'
        subtitle='A visual timeline of key milestones and professional experiences.'
      />

      <div className='timeline mx-auto max-w-5xl'>
        {careers.map((career) => (
          <motion.div
            key={career.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
          >
            <Card className='timeline-item dark-card text-white'>
              <h3 className='text-lg font-bold'>{career.title}</h3>

              <div className='flex flex-wrap gap-4 text-xs text-zinc-400'>
                <span className='flex items-center gap-2'>
                  <Building2 size={14} />
                  {career.company}
                </span>

                <span className='flex items-center gap-2'>
                  <CalendarDays size={14} />
                  {career.period}
                </span>
              </div>

              <ul className='space-y-3'>
                {career.description.map((line) => (
                  <li key={line} className='text-xs leading-7 text-zinc-400'>
                    • {line}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const icons = [
    { label: 'HTML', symbol: '5', color: '#ef652a' },
    { label: 'CSS', symbol: '3', color: '#38a5ef' },
    { label: 'JavaScript', symbol: 'JS', color: '#f4df4e' },
    { label: 'React', symbol: '⚛', color: '#60dafb' },
    { label: 'TypeScript', symbol: 'TS', color: '#3178c6' },
    { label: 'Code', symbol: '⌘', color: '#a45be6' },
  ];

  return (
    <section id='skills' className='section container-main'>
      <div className='section-marker' />

      <Heading
        title='My Core Skill'
        subtitle='An overview of the technologies and frameworks I work with.'
      />

      <div className='grid items-center gap-14 md:grid-cols-2'>
        <div className='relative mx-auto grid aspect-square w-full max-w-[420px] grid-cols-3 place-items-center gap-4'>
          <div className='pointer-events-none absolute inset-[12%] rounded-full border border-purple-500/15' />
          <div className='pointer-events-none absolute inset-[24%] rounded-full border border-purple-500/15' />
          <div className='pointer-events-none absolute inset-[36%] rounded-full border border-purple-500/15' />

          {icons.map((item) => (
            <div
              key={item.label}
              title={item.label}
              className='relative z-10 flex h-16 w-22 items-center justify-center rounded-lg border border-fuchsia-500/40 bg-[#101014] text-2xl font-bold'
              style={{ color: item.color }}
            >
              {item.symbol}
            </div>
          ))}
        </div>

        <div className='space-y-7'>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className='mb-3 flex justify-between text-sm font-semibold'>
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>

              <div
                className='skill-track'
                role='progressbar'
                aria-label={`${skill.name} proficiency`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.percentage}
              >
                <motion.div
                  className='skill-fill'
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id='faq' className='section container-main'>
      <div className='section-marker' />

      <Heading
        title='Frequently Asked Questions'
        subtitle='Find answers to some of the frequently asked questions below.'
      />

      <Accordion.Root
        type='single'
        collapsible
        defaultValue='faq-0'
        className='mx-auto max-w-4xl space-y-4'
      >
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={faq.question}
            value={`faq-${index}`}
            className='overflow-hidden rounded-xl border border-transparent bg-[#111111] data-[state=open]:border-fuchsia-500/50'
          >
            <Accordion.Header>
              <Accordion.Trigger className='group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold'>
                <span>{faq.question}</span>
                <ChevronDown
                  size={17}
                  className='shrink-0 transition-transform group-data-[state=open]:rotate-180'
                />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className='px-6 pb-6 text-sm leading-7 text-zinc-400'>
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}

function Comparison() {
  return (
    <section className='section container-main'>
      <Heading
        title='Why I Stand Out'
        subtitle='A showcase of my approach and technical areas of focus.'
      />

      <Card className='dark-card mx-auto max-w-4xl overflow-hidden p-4 text-white md:p-6'>
        <div className='grid grid-cols-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-4 text-center text-xs font-bold'>
          <span>Skill</span>
          <span>Me</span>
          <span>Other</span>
        </div>

        {advantages.map((advantage) => (
          <div
            key={advantage}
            className='grid grid-cols-3 items-center gap-2 border-b border-zinc-800 px-3 py-5 text-center last:border-0'
          >
            <span className='text-xs font-semibold'>{advantage}</span>

            <span className='mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600'>
              <Check size={15} />
            </span>

            <span className='text-xs text-zinc-500'>—</span>
          </div>
        ))}
      </Card>

      <p className='mx-auto mt-4 max-w-4xl text-center text-xs leading-6 text-zinc-500'>
        This table presents my areas of focus and does not claim a measured
        comparison with other developers.
      </p>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className='flex min-w-0 flex-col'>
      <div
        className='project-image relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[#101014]'
        style={{
          aspectRatio: '16 / 10',
          height: 'auto',
          minHeight: 0,
        }}
      >
        {!imageFailed ? (
          <Image
            src={project.image}
            alt={`${project.title} application screenshot`}
            fill
            sizes='(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw'
            className='!object-contain !object-center'
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className='flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#211034] to-[#0d0a12]'>
            <Code2 size={48} className='text-fuchsia-400' />
            <strong className='text-xl'>{project.title}</strong>
            <span className='text-xs text-zinc-400'>Project preview</span>
          </div>
        )}
      </div>

      <h3 className='mt-5 text-lg font-bold'>{project.title}</h3>

      <p className='mt-1 text-xs text-zinc-400'>{project.type}</p>

      <div className='mt-4 flex flex-wrap gap-2'>
        {project.technologies.map((tech) => (
          <span className='tag' key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <p className='mt-5 text-xs leading-7 text-zinc-400'>
        {project.description}
      </p>

      <div className='mt-auto flex flex-wrap gap-5 pt-6'>
        <a
          href={project.demo}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1 text-sm font-semibold text-fuchsia-400 transition-colors hover:text-fuchsia-300'
          aria-label={`Visit ${project.title} live demo`}
        >
          Visit
          <ArrowUpRight size={16} />
        </a>

        <a
          href={project.github}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white'
          aria-label={`View ${project.title} source code`}
        >
          <Code2 size={15} />
          Source Code
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id='projects' className='section container-main'>
      <div className='section-marker' />

      <div className='mb-12 grid gap-5 md:grid-cols-2'>
        <h2 className='section-title'>Experience in Front-End Development</h2>

        <p className='text-sm leading-8 text-zinc-400'>
          Explore selected applications combining software engineering,
          statistical workflows, and modern interactive interfaces.
        </p>
      </div>

      <div className='grid gap-x-7 gap-y-14 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className='section container-main'>
      <div className='section-marker' />

      <Heading
        title='What People Say About Me'
        subtitle='Professional feedback and testimonials.'
      />

      {testimonials.length > 0 ? (
        <div className='grid gap-5 md:grid-cols-3'>
          {testimonials.map((review, index) => (
            <Card
              key={`${review.name}-${index}`}
              className='dark-card p-6 text-white'
            >
              <strong className='text-sm'>{review.name}</strong>
              <p className='text-xs text-zinc-500'>{review.role}</p>
              <p className='text-sm leading-7 text-zinc-400'>
                &ldquo;{review.quote}&rdquo;
              </p>
            </Card>
          ))}
        </div>
      ) : (
        <Card className='dark-card mx-auto max-w-2xl p-8 text-center text-white'>
          <p className='text-sm text-zinc-400'>
            Verified professional testimonials will be featured here when
            available.
          </p>
        </Card>
      )}
    </section>
  );
}

type ContactModal = 'success' | 'error' | null;

type ContactResponse = {
  success?: boolean;
  error?: string;
  message?: string;
};

function Contact() {
  const [modal, setModal] = useState<ContactModal>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const contentType = response.headers.get('content-type') ?? '';

      let result: ContactResponse = {};

      if (contentType.includes('application/json')) {
        result = (await response.json()) as ContactResponse;
      }

      if (!response.ok || result.success === false) {
        const serverMessage =
          result.error ||
          result.message ||
          `The server returned HTTP ${response.status}.`;

        throw new Error(serverMessage);
      }

      setModal('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred.';

      setErrorMessage(message);

      if (process.env.NODE_ENV === 'development') {
        console.error('Contact form submission failed:', message);
      }

      setModal('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id='contact'
      className='section relative overflow-hidden bg-[radial-gradient(ellipse_at_85%_60%,#4d1b7c55,transparent_55%)]'
    >
      <div className='container-main grid items-center gap-12 md:grid-cols-2'>
        <div>
          <h2 className='section-title'>Contact Me</h2>
          <p className='section-subtitle max-w-sm'>
            Feel free to drop a message for any inquiries or collaborations.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='space-y-4 rounded-3xl bg-[#1b1427] p-6'
        >
          <Input
            placeholder='Name'
            aria-label='Name'
            autoComplete='name'
            required
            maxLength={100}
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className='contact-input h-12'
          />

          <Input
            placeholder='Email'
            aria-label='Email'
            type='email'
            autoComplete='email'
            required
            maxLength={200}
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            className='contact-input h-12'
          />

          <Textarea
            placeholder='Message'
            aria-label='Message'
            required
            maxLength={5000}
            value={form.message}
            onChange={(event) =>
              setForm({ ...form, message: event.target.value })
            }
            className='contact-input min-h-40 resize-y'
          />

          <Button
            type='submit'
            disabled={loading}
            className='gradient-button h-12 w-full'
          >
            <Send size={16} />
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>

      <Dialog.Root
        open={modal !== null}
        onOpenChange={(open) => {
          if (!open) setModal(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 z-[60] bg-black/85' />

          <Dialog.Content className='fixed left-1/2 top-1/2 z-[70] w-[calc(100%-40px)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-purple-500/20 bg-[#0e0717] px-8 py-10 text-center shadow-2xl'>
            <div className='mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-purple-950'>
              {modal === 'success' ? (
                <CheckCircle2 size={64} className='text-green-400' />
              ) : (
                <XCircle size={64} className='text-red-400' />
              )}
            </div>

            <Dialog.Title className='text-lg font-bold'>
              {modal === 'success'
                ? 'Message Sent Successfully!'
                : 'Message failed to send.'}
            </Dialog.Title>

            <Dialog.Description className='mt-4 text-sm leading-7 text-zinc-400'>
              {modal === 'success'
                ? "Thank you for reaching out. I'll get back to you as soon as possible."
                : 'Your message could not be delivered. Please try again later.'}
            </Dialog.Description>

            {modal === 'error' &&
              errorMessage &&
              process.env.NODE_ENV === 'development' && (
                <div
                  role='alert'
                  className='mt-5 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-left'
                >
                  <p className='text-xs leading-6 text-red-300'>
                    {errorMessage}
                  </p>
                </div>
              )}

            <Dialog.Close asChild>
              <button type='button' className='gradient-button mt-8'>
                Close
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

function Footer() {
  return (
    <footer className='border-t border-zinc-900 py-10'>
      <div className='container-main flex flex-col items-center justify-between gap-6 md:flex-row'>
        {/* FOOTER IDENTITY */}
        <div>
          {/* FIGMA LOGO */}
          <a
            href='#home'
            aria-label='Back to homepage'
            className='inline-flex h-10 w-10 items-center justify-center'
          >
            <Image
              src='/images/logo.png'
              alt='Swarni Portfolio Logo'
              width={40}
              height={40}
              className='block h-10 w-10 object-contain'
            />
          </a>

          {/* COPYRIGHT */}
          <p className='mt-2 text-xs text-zinc-500'>
            © {new Date().getFullYear()} Kadek Swarniati. All rights reserved.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className='flex items-center gap-5'>
          {/* GITHUB */}
          {profile.github && (
            <a
              href={profile.github}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='text-zinc-400 transition-colors hover:text-fuchsia-400'
            >
              <Code2 size={20} />
            </a>
          )}

          {/* INSTAGRAM */}
          {profile.instagram && (
            <a
              href={profile.instagram}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='text-zinc-400 transition-colors hover:text-fuchsia-400'
            >
              <Globe size={20} />
            </a>
          )}

          {/* LINKEDIN */}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='text-zinc-400 transition-colors hover:text-fuchsia-400'
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className='min-h-screen overflow-x-clip bg-[#020203] text-white'>
      <Hero />
      <About />
      <Career />
      <Skills />
      <FAQ />
      <Comparison />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
