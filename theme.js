import { css } from 'styled-components';

const COLORS = {
  background: '#000',
  impactText: '#fff',
  text: '#aaa',
  link: '#92e1ff',
  linkHover: '#7ecdff',
  highlightedLink: 'rgb(215, 167, 94)',
};

const FONT_SIZES = {
  xs: '13pt',
  sm: '16pt',
  md: '19pt',
  lg: '21pt',
};

const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const media = (type = 'min') =>
  Object.keys(BREAKPOINTS).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (${type}-width: ${BREAKPOINTS[label]}px) {
        ${css(...args)};
      }
    `;
    return acc;
  }, {});

export default {
  COLORS,
  FONT_SIZES,
  mediaMin: media('min'),
  mediaMax: media('max'),
};
