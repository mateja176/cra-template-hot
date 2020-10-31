import { CSSProperties } from 'react';

interface Font {
  fontFamily: CSSProperties['fontFamily'];
  fontStyle: CSSProperties['fontStyle'];
  fontWeight: CSSProperties['fontWeight'];
  textDecoration: CSSProperties['textDecoration'];
}

export interface Typography {
  fontFamily: Font['fontFamily'];
  h1: Font;
  h2: Font;
  h3: Font;
  h4: Font;
  h5: Font;
  h6: Font;
  p: Font;
  a: Font;
  button: Font;
  code: Font;
  blockquote: Font;
}
