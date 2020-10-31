import { CSSProperties } from 'react';

interface Animation {
  duration: CSSProperties['animationDuration'];
  timingFunction: CSSProperties['animationTimingFunction'];
  delay: CSSProperties['animationDelay'];
  direction: CSSProperties['animationDirection'];
  fillMode: CSSProperties['animationFillMode'];
  iterationCount: CSSProperties['animationIterationCount'];
  playState: CSSProperties['animationPlayState'];
}

export type Animations = Record<
  NonNullable<CSSProperties['animationName']>,
  Animation
>;
