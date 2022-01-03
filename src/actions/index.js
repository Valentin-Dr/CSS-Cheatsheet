export const RANDOMIZE_FIRST_COLOR = 'RANDOMIZE_FIRST_COLOR';
export const RANDOMIZE_SECOND_COLOR = 'RANDOMIZE_SECOND_COLOR';
export const RANDOMIZE_NEUM_RING_COLORS = 'RANDOMIZE_NEUM_RING_COLORS';

export const randomizeFirstColor = () => ({
  type: RANDOMIZE_FIRST_COLOR,
});

export const randomizeSecondColor = () => ({
  type: RANDOMIZE_SECOND_COLOR,
});

export const randomizeNeumRing = () => ({
  type: RANDOMIZE_NEUM_RING_COLORS,
});
