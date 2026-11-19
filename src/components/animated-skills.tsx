'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type CSSProperties } from 'react';

type Skill = {
  name: string;
  image: string;
  percentage: number;
  description: string;
  orbit: 0 | 1 | 2;
  angle: number;
};

const skills: Skill[] = [
  {
    name: 'HTML',
    image: '/images/skills/skill-html5.png',
    percentage: 100,
    description: 'Semantic structure and accessible web interfaces.',
    orbit: 2,
    angle: -120,
  },
  {
    name: 'Redux',
    image: '/images/skills/skill-redux.png',
    percentage: 85,
    description: 'Predictable state management for complex applications.',
    orbit: 0,
    angle: -90,
  },
  {
    name: 'JavaScript',
    image: '/images/skills/skill-javascript.png',
    percentage: 90,
    description: 'Interactive applications and modern web logic.',
    orbit: 2,
    angle: 180,
  },
  {
    name: 'React',
    image: '/images/skills/skill-react.png',
    percentage: 90,
    description: 'Component-driven, responsive user experiences.',
    orbit: 1,
    angle: 130,
  },
  {
    name: 'CSS',
    image: '/images/skills/skill-css3.png',
    percentage: 80,
    description: 'Responsive layouts, visual systems, and motion.',
    orbit: 2,
    angle: -45,
  },
  {
    name: 'TypeScript',
    image: '/images/skills/skill-typescript.png',
    percentage: 70,
    description: 'Type-safe application architecture and maintainability.',
    orbit: 1,
    angle: 35,
  },
];

const ORBIT_SPEEDS = [0.075, -0.045, 0.032];
const ORBIT_RADII = [0.22, 0.34, 0.45];

type Position = {
  x: number;
  y: number;
};

function getPosition(
  skill: Skill,
  time: number,
  size: number,
  reducedMotion: boolean
): Position {
  const angle =
    ((skill.angle + (reducedMotion ? 0 : time * ORBIT_SPEEDS[skill.orbit])) *
      Math.PI) /
    180;

  const radius = size * ORBIT_RADII[skill.orbit];

  return {
    x: size / 2 + Math.cos(angle) * radius,
    y: size / 2 + Math.sin(angle) * radius,
  };
}

export default function AnimatedSkills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [orbitSize, setOrbitSize] = useState(420);
  const [time, setTime] = useState(0);

  const lastFrameRef = useRef<number | null>(null);
  const elapsedRef = useRef(0);

  const activeSkill = selectedSkill ?? skills[spotlightIndex].name;

  /* Observe section visibility */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* Respect reduced-motion preference */
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => setReducedMotion(media.matches);
    update();

    media.addEventListener('change', update);

    return () => {
      media.removeEventListener('change', update);
    };
  }, []);

  /* Measure responsive orbit */
  useEffect(() => {
    const element = orbitRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setOrbitSize(entry.contentRect.width);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* Animate independently moving skills */
  useEffect(() => {
    if (!isVisible || isPaused || reducedMotion) {
      lastFrameRef.current = null;
      return;
    }

    let frame = 0;

    const animate = (timestamp: number) => {
      if (lastFrameRef.current === null) {
        lastFrameRef.current = timestamp;
      }

      const delta = Math.min(timestamp - lastFrameRef.current, 50);

      lastFrameRef.current = timestamp;
      elapsedRef.current += delta;

      // Render at approximately 30 FPS.
      if (elapsedRef.current >= 33) {
        setTime((previous) => previous + elapsedRef.current);
        elapsedRef.current = 0;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      lastFrameRef.current = null;
    };
  }, [isVisible, isPaused, reducedMotion]);

  /* Automatic spotlight */
  useEffect(() => {
    if (!isVisible || isPaused || selectedSkill || reducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setSpotlightIndex((previous) => (previous + 1) % skills.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isVisible, isPaused, selectedSkill, reducedMotion]);

  const positions = skills.map((skill) =>
    getPosition(skill, time, orbitSize, reducedMotion)
  );

  /*
   * Dynamic constellation connections.
   * Only connect different orbit levels and nearby icons.
   */
  const connections: {
    from: Position;
    to: Position;
    key: string;
    active: boolean;
  }[] = [];

  for (let i = 0; i < skills.length; i++) {
    for (let j = i + 1; j < skills.length; j++) {
      if (skills[i].orbit === skills[j].orbit) continue;

      const dx = positions[i].x - positions[j].x;
      const dy = positions[i].y - positions[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < orbitSize * 0.31) {
        connections.push({
          from: positions[i],
          to: positions[j],
          key: `${skills[i].name}-${skills[j].name}`,
          active:
            skills[i].name === activeSkill || skills[j].name === activeSkill,
        });
      }
    }
  }

  const focusedSkill = skills.find((skill) => skill.name === activeSkill);

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='section animated-skills-section'
      aria-labelledby='animated-skills-heading'
    >
      <div className='container-main'>
        <div className='animated-skills-heading'>
          <div className='section-marker' />

          <h2 id='animated-skills-heading' className='section-title'>
            My Core Skill
          </h2>

          <p className='section-subtitle'>
            An overview of the key technologies and frameworks I work with.
          </p>
        </div>

        <div className='animated-skills-layout'>
          {/* LEFT: MULTI-ORBIT CONSTELLATION */}
          <div
            ref={orbitRef}
            className='intelligent-orbit'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setSelectedSkill(null);
            }}
          >
            <div className='intelligent-orbit-glow' />

            <div className='intelligent-orbit-ring orbit-ring-outer' />
            <div className='intelligent-orbit-ring orbit-ring-middle' />
            <div className='intelligent-orbit-ring orbit-ring-inner' />

            {/* Dynamic connections */}
            <svg
              className='intelligent-orbit-connections'
              viewBox={`0 0 ${orbitSize} ${orbitSize}`}
              aria-hidden='true'
            >
              <defs>
                <linearGradient
                  id='skill-connection-gradient'
                  x1='0'
                  y1='0'
                  x2='1'
                  y2='1'
                >
                  <stop offset='0%' stopColor='#e43e9c' stopOpacity='0.65' />
                  <stop offset='100%' stopColor='#8d3fe0' stopOpacity='0.35' />
                </linearGradient>
              </defs>

              {connections.slice(0, 4).map((connection) => (
                <line
                  key={connection.key}
                  x1={connection.from.x}
                  y1={connection.from.y}
                  x2={connection.to.x}
                  y2={connection.to.y}
                  stroke='url(#skill-connection-gradient)'
                  strokeWidth={connection.active ? 1.8 : 0.8}
                  opacity={connection.active ? 0.8 : 0.24}
                  strokeDasharray={connection.active ? 'none' : '4 6'}
                />
              ))}
            </svg>

            {/* Orbiting technology cards */}
            {skills.map((skill, index) => {
              const position = positions[index];
              const active = activeSkill === skill.name;

              const style: CSSProperties = {
                left: position.x,
                top: position.y,
              };

              return (
                <button
                  key={skill.name}
                  type='button'
                  className={`intelligent-orbit-card ${
                    active ? 'intelligent-orbit-card-active' : ''
                  }`}
                  style={style}
                  aria-label={`Explore ${skill.name}`}
                  aria-pressed={selectedSkill === skill.name}
                  onClick={() => {
                    setSelectedSkill((previous) =>
                      previous === skill.name ? null : skill.name
                    );
                    setIsPaused(true);
                  }}
                  onFocus={() => {
                    setSelectedSkill(skill.name);
                    setIsPaused(true);
                  }}
                  onBlur={() => {
                    setIsPaused(false);
                  }}
                >
                  <Image
                    src={skill.image}
                    alt=''
                    width={40}
                    height={40}
                    className='intelligent-orbit-icon'
                  />
                </button>
              );
            })}

            {/* Center spotlight */}
            <div className='intelligent-orbit-center'>
              <span className='intelligent-orbit-center-label'>
                CURRENT FOCUS
              </span>
              <strong>{focusedSkill?.name}</strong>
            </div>

            {/* Subtle orbit satellites */}
            <span className='intelligent-orbit-dot orbit-dot-one' />
            <span className='intelligent-orbit-dot orbit-dot-two' />
            <span className='intelligent-orbit-dot orbit-dot-three' />
          </div>

          {/* RIGHT: SYNCHRONIZED SKILL BARS */}
          <div className='intelligent-skills-right'>
            <div className='animated-skills-progress'>
              {skills.map((skill, index) => {
                const active = activeSkill === skill.name;

                const style = {
                  '--skill-progress': `${skill.percentage}%`,
                  '--skill-delay': `${index * 120}ms`,
                } as CSSProperties;

                return (
                  <button
                    key={skill.name}
                    type='button'
                    className={`intelligent-skill-row ${
                      active ? 'intelligent-skill-row-active' : ''
                    }`}
                    onClick={() => {
                      setSelectedSkill(skill.name);
                      setIsPaused(true);
                    }}
                  >
                    <span className='animated-skill-label'>
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </span>

                    <span className='animated-skill-track'>
                      <span
                        className={`animated-skill-fill ${
                          isVisible ? 'animated-skill-fill-visible' : ''
                        }`}
                        style={style}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Context panel */}
            <div className='intelligent-skill-detail' aria-live='polite'>
              <span className='intelligent-skill-detail-label'>
                TECHNOLOGY SPOTLIGHT
              </span>

              <strong>{focusedSkill?.name}</strong>

              <p>{focusedSkill?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
