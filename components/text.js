import css from 'styled-jsx/css';
import { COLORS, FONT_SIZES } from '../theme';

const textStyle = css.span`
  font-size: ${FONT_SIZES.m};
  color: ${COLORS.text};
`;
const Text = ({ children }) => (
  <span>
    {children}
    <style jsx>{textStyle}</style>
  </span>
);

const impactTextStyle = css.span`
  // font-family: Roboto;
  color: ${COLORS.impactText};
`;
const ImpactText = ({ children }) => (
  <span>
    {children}
    <style jsx>{textStyle}</style>
    <style jsx>{impactTextStyle}</style>
  </span>
);

export { Text, ImpactText };
