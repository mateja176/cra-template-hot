import { Animations } from './animations';
import { Borders } from './borders';
import { Breakpoints } from './breakpoints';
import { Palette } from './palette';
import { Scales } from './scales';
import { Shadows } from './shadows';
import { Spacing } from './spacing';
import { Transitions } from './transitions';
import { Typography } from './typography';
import { ZIndexes } from './zIndexes';

export interface ThemeConfig {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  breakpoints: Breakpoints;
  scales: Scales;
  zIndexes: ZIndexes;
  borders: Borders;
  shadows: Shadows;
  transitions: Transitions;
  animations: Animations;
}
