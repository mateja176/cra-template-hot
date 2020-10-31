import { CSSProperties } from 'react';

type Transition = {
  property: CSSProperties['transitionProperty'];
  duration: CSSProperties['transitionDuration'];
  timingFunction: CSSProperties['transitionTimingFunction'];
  delay: CSSProperties['transitionDelay'];
};

export type Transitions = Record<string, Transition>;
