import styled from 'styled-components';
import { Text, ImpactText, LinkText } from '../text';
import Picture from '../picture';

const Wrapper = styled.div`
  padding: 5rem 3rem;
  margin-bottom: 3rem;

  iframe {
    display: block;
    width: 100%;
    height: 80vh;
    ${(p) => p.theme.mediaMax.lg`
      height: 45vh;
    `}
  }
`;

const Description = styled(Text)`
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: block;
`;

const Music = () => (
  <Wrapper>
    <ImpactText size="lg">Music</ImpactText>
    <Picture webpSrc="/dylonious.webp" pngSrc="/dylonious.png" verticalPadding hideForDesktop />
    <Description size="sm">
      My biggest hobby is making music under the moniker{' '}
      <ImpactText size="sm">Dylonious</ImpactText>.
      <br /> You can find me on{' '}
      <LinkText
        size="sm"
        href="https://open.spotify.com/artist/1Op9vSnBgavICOjzdFpM3X?si=fJVryOLfRxSa4fLcXasy_g"
      >
        Spotify
      </LinkText>
      ,{' '}
      <LinkText size="sm" href="https://www.youtube.com/user/dbuss1music">
        YouTube
      </LinkText>
      ,{' '}
      <LinkText size="sm" href="https://soundcloud.com/dylanbussone">
        Soundcloud
      </LinkText>
      , or{' '}
      <LinkText size="sm" href="https://dylonious.bandcamp.com/">
        Bandcamp
      </LinkText>
      .
    </Description>

    <iframe
      src="https://www.youtube.com/embed/LSiFCyeKhWE?autoplay=0"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Wrapper>
);

export default Music;
