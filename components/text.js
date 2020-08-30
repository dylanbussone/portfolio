import styled, { css } from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const Text = styled.span`
  ${(props) =>
    css`
      font-size: ${props.size || FONT_SIZES.m};
      color: ${props.color || COLORS.text};
    `}
`;

const ImpactText = (props) => <Text color={COLORS.impactText} {...props} />;

const LinkText = styled.a`
  font-size: ${(props) => props.size || FONT_SIZES.m};
  color: ${COLORS.link};
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${COLORS.linkHover};
  }
`;

export { Text, ImpactText, LinkText };
