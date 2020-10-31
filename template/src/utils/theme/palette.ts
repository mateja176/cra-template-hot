import { CSSProperties } from 'react';

export interface Color {
  light?: CSSProperties['color'];
  main: CSSProperties['color'];
  dark?: CSSProperties['color'];
}

export interface Palette {
  type: 'light' | 'dark';
  /**
   * used to represent primary interface elements for a user. It's the color displayed most frequently across your app's screens and components.
   */
  primary: Color;
  /**
   * used to represent secondary interface elements for a user. It provides more ways to accent and distinguish your product. Having it is optional.
   */
  secondary: Color;
  /**
   * used to represent interface elements that the user should be made aware of.
   */
  error: Color;
  /**
   * used to represent potentially dangerous actions or important messages.
   */
  warning: Color;
  /**
   * used to present information to the user that is neutral and not necessarily important.
   */
  info: Color;
  /**
   * used to indicate the successful completion of an action that user triggered.
   */
  success: Color;
}
