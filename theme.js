import { css } from 'styled-components';

const COLORS = {
  background: '#010101',
  impactText: '#fff',
  text: '#aaa',
  link: '#92e1ff',
  linkHover: '#7ecdff',
  highlightedLink: 'rgb(215, 167, 94)',
  workBackground: '#010101',
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

const media = (type) =>
  Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (${type}-width: ${BREAKPOINTS[label]}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  }, {});

export default {
  COLORS,
  FONT_SIZES,
  mediaMin: media('min'),
  mediaMax: media('max'),
};
