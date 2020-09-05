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

const StyledLink = styled.a`
  font-size: ${(p) => p.theme.FONT_SIZES[p.size || 'md']};
  color: ${(p) => p.theme.COLORS.link};
  transition: color 0.3s ease;
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: ${(p) => p.theme.COLORS.link};
  }
  &:hover {
    color: ${(p) => p.theme.COLORS.linkHover};
  }
`;

const LinkText = (props) => (
  <StyledLink target="_blank" rel="noopener" {...props} />
);

const HeaderLinkText = styled.a`
  font-size: ${(p) => p.theme.FONT_SIZES.sm};
  color: ${(p) =>
    p.highlight ? p.theme.COLORS.highlightedLink : p.theme.COLORS.impactText};
  transition: color 0.3s ease;
  text-decoration: none;
  cursor: pointer;
`;

export { Text, ImpactText, LinkText, HeaderLinkText };
