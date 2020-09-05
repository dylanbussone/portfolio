import styled from 'styled-components';
import { Text, ImpactText, LinkText } from '../text';
import { HEADER_HEIGHT } from '../header';

const Wrapper = styled.div`
  padding: 5rem 3rem;
  height: calc(100vh - ${HEADER_HEIGHT});
`;

const Description = styled(Text)`
  margin-bottom: 4rem;
  display: block;
`;

const Music = () => (
  <Wrapper>
    <Description>
      My biggest hobby is making music under the moniker{' '}
      <ImpactText>Dylonious</ImpactText>.
      <br /> You can find me on{' '}
      <LinkText href="https://open.spotify.com/artist/1Op9vSnBgavICOjzdFpM3X?si=fJVryOLfRxSa4fLcXasy_g">
        Spotify
      </LinkText>
      ,{' '}
      <LinkText href="https://www.youtube.com/user/dbuss1music">
        YouTube
      </LinkText>
      ,{' '}
      <LinkText href="https://soundcloud.com/dylanbussone">Soundcloud</LinkText>
      , or <LinkText href="https://dylonious.bandcamp.com/">Bandcamp</LinkText>.
    </Description>

    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/LSiFCyeKhWE?autoplay=0"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Wrapper>
);

export default Music;
