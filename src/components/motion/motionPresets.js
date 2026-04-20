export const EASE_OUT = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' }
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } }
};

export const viewportOnce = {
  once: true,
  amount: 0.25,
  margin: '0px 0px -10% 0px'
};

export const transitionFast = { duration: 0.55, ease: EASE_OUT };
export const transitionMed = { duration: 0.7, ease: EASE_OUT };

