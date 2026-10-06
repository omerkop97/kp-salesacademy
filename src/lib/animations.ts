import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initLenis() {
  if (reduced) return null;
  const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // anchor-links soepel laten scrollen
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!.replace('/', '');
      const target = id.length > 1 ? document.querySelector<HTMLElement>(id) : null;
      if (!target || location.pathname !== '/') return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -40 });
      document.dispatchEvent(new CustomEvent('menu:close'));
    });
  });
  return lenis;
}

/** Koppen regel voor regel "omhoog" laten komen, zoals op sales-club.nl */
function splitHeadings() {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    // autoSplit: opnieuw splitsen als de breedte verandert (draaien telefoon, resize)
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.09,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }),
    });
  });
}

function reveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    const type = el.dataset.reveal;
    const from: gsap.TweenVars =
      type === 'fade' ? { opacity: 0 } :
      type === 'scale' ? { opacity: 0, scale: 0.94 } :
      type === 'left' ? { opacity: 0, x: -40 } :
      { opacity: 0, y: 40 };
    gsap.fromTo(el, from, {
      opacity: 1, x: 0, y: 0, scale: 1,
      duration: 1.1,
      delay: Number(el.dataset.delay ?? 0),
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-divider]').forEach((el) => {
    gsap.from(el.querySelectorAll('[data-divider-line]'), {
      scaleX: 0, duration: 1.4, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });

  // stagger voor groepen (kaarten, lijsten)
  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
    gsap.from(group.children, {
      opacity: 0, y: 50, duration: 1, stagger: 0.12, ease: 'expo.out',
      scrollTrigger: { trigger: group, start: 'top 85%' },
    });
  });

  // parallax
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: Number(el.dataset.parallax ?? -15),
      ease: 'none',
      scrollTrigger: { trigger: el.parentElement ?? el, scrub: true },
    });
  });
}

function hero() {
  const root = document.querySelector<HTMLElement>('[data-hero]');
  if (!root) return;
  const title = root.querySelector<HTMLElement>('[data-hero-title]');
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 });

  root.querySelectorAll<SVGRectElement>('[data-hero-frame] path').forEach((p) => {
    const len = p.getTotalLength();
    gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    tl.to(p, { strokeDashoffset: 0, duration: 2.2, ease: 'power3.inOut' }, 0);
  });

  if (title) {
    let first = true;
    SplitText.create(title, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) => {
        // alleen bij het laden animeren; bij een resize gewoon opnieuw splitsen
        if (!first) return;
        first = false;
        tl.from(self.lines, { yPercent: 115, duration: 1.3, stagger: 0.12 }, 0.2);
      },
    });
    gsap.set(title, { opacity: 1 });
  }
  tl.to(root.querySelectorAll('[data-hero-in]'), { opacity: 1, y: 0, duration: 1.1, stagger: 0.1 }, 0.7);

  // hero-inhoud zakt rustig weg bij scrollen
  gsap.to(root.querySelector('[data-hero-content]'), {
    yPercent: 12, opacity: 0.4, ease: 'none',
    scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
  });
}

/** Horizontale marquee die meebeweegt met de scrollsnelheid */
function marquees() {
  document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((el) => {
    const track = el.querySelector<HTMLElement>('[data-marquee-track]');
    if (!track) return;
    const tween = gsap.to(track, { xPercent: -50, duration: 30, ease: 'none', repeat: -1 });
    ScrollTrigger.create({
      onUpdate: (self) => {
        const v = Math.min(Math.abs(self.getVelocity()) / 400, 4);
        gsap.to(tween, { timeScale: 1 + v, duration: 0.3, overwrite: true });
        gsap.to(tween, { timeScale: 1, duration: 1.2, delay: 0.3 });
      },
    });
  });
}

/** Pijlers: gepinde sectie op desktop, kaarten schuiven één voor één in */
function pillars() {
  const section = document.querySelector<HTMLElement>('[data-pillars]');
  if (!section) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', () => {
    const cards = gsap.utils.toArray<HTMLElement>('[data-pillar]', section);
    const progress = section.querySelector('[data-pillars-progress]');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top top', end: `+=${cards.length * 70}%`, pin: true, scrub: 0.8 },
    });
    cards.forEach((card, i) => {
      if (i === 0) return;
      tl.from(card, { yPercent: 120, opacity: 0, duration: 1, ease: 'power2.out' });
      tl.to(cards[i - 1], { scale: 0.94, opacity: 0.35, duration: 1 }, '<');
    });
    if (progress) tl.fromTo(progress, { scaleY: 0 }, { scaleY: 1, ease: 'none', duration: tl.duration() }, 0);
  });
  mm.add('(max-width: 1023px)', () => {
    gsap.utils.toArray<HTMLElement>('[data-pillar]', section).forEach((card) => {
      gsap.from(card, { opacity: 0, y: 60, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
    });
  });
}

/** Stappen + groeipad: gouden lijn groeit mee met scrollen, punten lichten op */
function timelines() {
  gsap.utils.toArray<HTMLElement>('[data-timeline]').forEach((el) => {
    const line = el.querySelector<HTMLElement>('[data-timeline-line]');
    if (line) {
      // horizontale lijn op desktop (als die breder dan hoog is), anders verticaal
      const mm = gsap.matchMedia();
      const grow = () => {
        const horizontal = line.offsetWidth > line.offsetHeight;
        const prop = horizontal ? 'scaleX' : 'scaleY';
        gsap.fromTo(line, { scaleX: 1, scaleY: 1, [prop]: 0 }, {
          [prop]: 1, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 70%', end: horizontal ? 'top 20%' : 'bottom 60%', scrub: true },
        });
      };
      mm.add('(min-width: 1024px)', grow);
      mm.add('(max-width: 1023px)', grow);
    }
    el.querySelectorAll<HTMLElement>('[data-timeline-item]').forEach((item) => {
      ScrollTrigger.create({
        trigger: item, start: 'top 65%',
        onToggle: (self) => item.classList.toggle('is-active', self.isActive || self.progress === 1),
        onLeave: () => item.classList.add('is-active'),
        onLeaveBack: () => item.classList.remove('is-active'),
      });
    });
  });
}

function showAll() {
  document.querySelectorAll<HTMLElement>('[data-reveal], [data-hero-in], [data-hero-title]').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  document.querySelectorAll('[data-timeline-item]').forEach((el) => el.classList.add('is-active'));
}

export async function initAnimations() {
  if (reduced) return showAll();
  initLenis();
  // eerst fonts laden, anders klopt de regelafbreking van SplitText niet
  await document.fonts?.ready;
  hero();
  splitHeadings();
  reveals();
  marquees();
  pillars();
  timelines();
  ScrollTrigger.refresh();
}
