import styled, { css } from 'styled-components';
import { HEADER_HEIGHT } from './header';

const Wrapper = styled.div`
  position: relative;
  ${(p) =>
    p.hideForMobile &&
    css`
      ${(p) => p.theme.mediaMax.lg`
        display: none;
      `}
    `}
`;

const StyledPicture = styled.picture`
  img {
    height: calc(100vh - ${HEADER_HEIGHT});
    width: 100%;
    object-fit: cover;

    ${(p) =>
      !p.cover &&
      p.theme.mediaMax.lg`
      height: 100%;
      object-fit: contain;
    `}
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
      linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 100%)${
        p.fadeBottom && css`,`
      }
      `}
    ${(p) =>
      p.fadeBottom &&
      css`
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 100%)
    `};
`;

const Picture = ({
  webpSrc,
  pngSrc,
  jpgSrc,
  fadeTop,
  fadeBottom,
  cover,
  hideForMobile,
}) => (
  <Wrapper hideForMobile={hideForMobile}>
    <StyledPicture cover={cover}>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={pngSrc} type="image/png" />
      <source srcSet={jpgSrc} type="image/jpeg" />
      <img src={pngSrc || jpgSrc} />
    </StyledPicture>
    {(fadeTop || fadeBottom) && (
      <StyledFade fadeTop={fadeTop} fadeBottom={fadeBottom} />
    )}
  </Wrapper>
);

export default Picture;
