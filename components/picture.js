import styled, { css } from 'styled-components';
import { HEADER_HEIGHT } from './header';

const Wrapper = styled.div`
  position: relative;
`;

const StyledPicture = styled.picture`
  img {
    height: calc(100vh - ${HEADER_HEIGHT});
    width: 100%;
    object-fit: cover;
  }
`;

const StyledFade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-attachment: fixed;

  background-image: ${(p) =>
      p.fadeTop &&
      css`
    linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 100%)${
      p.fadeBottom && css`,`
    }
    `}
    ${(p) =>
      p.fadeBottom &&
      css`
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 100%)
  `};
`;

const Picture = ({ webpSrc, jpgSrc, fadeTop, fadeBottom }) => (
  <Wrapper>
    <StyledPicture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={jpgSrc} type="image/jpeg" />
      <img src={jpgSrc} />
    </StyledPicture>
    {(fadeTop || fadeBottom) && (
      <StyledFade fadeTop={fadeTop} fadeBottom={fadeBottom} />
    )}
  </Wrapper>
);

export default Picture;
