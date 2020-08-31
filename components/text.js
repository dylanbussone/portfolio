import styled, { css } from 'styled-components';

const Text = styled.span`
  ${(p) =>
    css`
      font-size: ${p.theme.FONT_SIZES[p.size || 'md']};
      color: ${p.color || p.theme.COLORS.text};
    `}
`;

const ImpactText = styled.span`
  ${(p) =>
    css`
      font-size: ${p.theme.FONT_SIZES[p.size || 'md']};
      color: ${p.color || p.theme.COLORS.impactText};
    `}
`;

const LinkText = styled.a`
  font-size: ${(p) => p.theme.FONT_SIZES[p.size || 'md']};
  color: ${(p) => p.theme.COLORS.link};
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${(p) => p.theme.COLORS.linkHover};
  }
`;

export { Text, ImpactText, LinkText };
