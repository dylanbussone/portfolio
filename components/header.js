import styled from 'styled-components';
import { LinkText } from './text';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  background: black;
  padding: 0 3rem;
`;

const Nav = styled.nav`
  > a {
    margin-left: 3rem;
  }
  > a:first-child {
    margin-left: 0;
  }
`;

// TODO: for mobile, use dropdown menu
const Header = () => (
  <StyledHeader>
    <LinkText href="/" size="sm">
      Dylan Bussone
    </LinkText>
    <Nav>
      <LinkText href="#" size="sm">
        Work
      </LinkText>
      <LinkText href="#" size="sm">
        Fun
      </LinkText>
      <LinkText href="#" size="sm">
        About
      </LinkText>
      <LinkText href="#" size="sm">
        Resume
      </LinkText>
    </Nav>
  </StyledHeader>
);

export default Header;
