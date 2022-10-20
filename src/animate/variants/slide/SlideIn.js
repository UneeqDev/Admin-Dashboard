// ----------------------------------------------------------------------

const DISTANCE = 100;

const TRANSITION_ENTER = {
  duration: 1.0,
  ease: [0.43, 0.13, 0.23, 0.96],
  staggerChildren: 0.35,
};
const TRANSITION_EXIT = {
  duration: 0.48,
  ease: [0.43, 0.13, 1.0, 0.96],
};

export const varSlideInUp = {
  initial: { y: DISTANCE },
  animate: { y: 0, transition: TRANSITION_ENTER },
  exit: { y: DISTANCE, transition: TRANSITION_EXIT },
};

export const varSlideInDown = {
  initial: { y: -DISTANCE },
  animate: { y: 0, transition: TRANSITION_ENTER },
  exit: { y: -DISTANCE, transition: TRANSITION_EXIT },
};

export const varSlideInLeft = {
  initial: { x: -DISTANCE },
  animate: { x: 0, transition: TRANSITION_ENTER },
  exit: { x: -DISTANCE, transition: TRANSITION_EXIT },
};

export const varSlideInRight = {
  initial: { x: DISTANCE },
  animate: { x: 0, transition: TRANSITION_ENTER },
  exit: { x: DISTANCE, transition: TRANSITION_EXIT },
};
