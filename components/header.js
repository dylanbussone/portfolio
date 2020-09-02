import styled from 'styled-components';
import { HeaderLinkText } from './text';

const HEADER_HEIGHT_PX = 75;
const HEADER_HEIGHT = `${HEADER_HEIGHT_PX}px`;
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
  z-index: 2;
`;

const Nav = styled.nav`
  > a {
    margin-left: 3rem;
  }
  > a:first-child {
    margin-left: 0;
  }
`;

const Name = styled(HeaderLinkText)`
  ${(p) => p.theme.mediaMax.md`
    display: none;
  `}
`;

const Header = ({ inView }) => {
  return (
    <Wrapper>
      <Name href="/">Dylan Bussone</Name>
      <div>
        <Nav>
          <HeaderLinkText
            highlight={inView === 'About'}
            onClick={() => scrollTo('about')}
          >
            About
          </HeaderLinkText>
          <HeaderLinkText
            highlight={inView === 'Work'}
            onClick={() => scrollTo('work')}
          >
            Work
          </HeaderLinkText>
          <HeaderLinkText
            highlight={inView === 'Music'}
            onClick={() => scrollTo('music')}
          >
            Music
          </HeaderLinkText>
        </Nav>
      </div>
    </Wrapper>
  );
};

function scrollTo(id) {
  const targetY = document.getElementById(id).offsetTop - HEADER_HEIGHT_PX;
  window.scroll({ top: targetY, behavior: 'smooth' });
}

export default Header;
