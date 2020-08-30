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

const Header = () => (
  <StyledHeader>
    <LinkText href="/">Dylan Bussone</LinkText>
    <Nav>
      <LinkText href="#">Work</LinkText>
      <LinkText href="#">Fun</LinkText>
      <LinkText href="#">About</LinkText>
      <LinkText href="#">Resume</LinkText>
    </Nav>
  </StyledHeader>
);

export default Header;
