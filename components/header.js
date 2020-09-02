import styled from 'styled-components';
import { LinkText } from './text';

const HEADER_HEIGHT = '75px';
export { HEADER_HEIGHT };

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT};
  background: ${(p) => p.theme.COLORS.background};
  padding: 0 3rem;

  a {
    color: ${(p) => p.theme.COLORS.impactText};
  }
`;

const Nav = styled.nav`
  // Desktop
  ${(p) => p.theme.mediaMin.md`
    > a {
      margin-left: 3rem;
    }
    > a:first-child {
      margin-left: 0;
    }
  `}

  // Mobile
  ${(p) => p.theme.mediaMax.md`
    display: none;
  `}
`;

const Header = () => {
  return (
    <Wrapper>
      <LinkText href="/" size="sm">
        Dylan Bussone
      </LinkText>
      <div>
        <Nav>
          <LinkText size="sm">About</LinkText>
          <LinkText size="sm">Work</LinkText>
          <LinkText size="sm">Music</LinkText>
          <LinkText size="sm">Resume</LinkText>
        </Nav>
      </div>
    </Wrapper>
  );
};

export default Header;
