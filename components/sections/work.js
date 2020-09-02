import styled from 'styled-components';
import { Text, ImpactText, LinkText } from '../text';

const Tile = styled.div`
  // width: 50%;
  width: 500px;
  height: 500px;
  background: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: margin 0.3s ease;

  &:hover {
    margin-top: -3px;
  }
`;

const TileShade = styled.div`
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.3s ease;
  padding: 1.75rem 0;

  &:hover {
    opacity: 1;
  }
`;

const TileTitle = styled(ImpactText)`
  background: ${(p) => p.theme.COLORS.background};
  padding: 1rem;
  display: inline-block;
`;

const TileDescription = styled(ImpactText)`
  padding: 1rem;
  display: block;
`;

const TileLinks = styled.div`
  background: ${(p) => p.theme.COLORS.background};
  padding: 1rem;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;

  a {
    margin-right: 2rem;
  }
`;

const Work = styled.div`
  padding: 5rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${(p) => p.theme.mediaMin.md`
  `}
`;

export default () => (
  <Work>
    <Tile bg="/happy-little-sound-clouds.gif">
      <TileShade>
        <TileTitle size="lg">Happy Little Sound Clouds</TileTitle>
        <TileDescription size="sm">
          Custom audio player and canvas soundwave progress bar.
          <br />
          The waveform is
          drawn dynamically based on window size, and bars are rechunked &
          averaged to display an appropriate amount of data.
        </TileDescription>
        <TileLinks>
          <LinkText
            size="sm"
            href="https://dylanbussone.github.io/happy-little-sound-clouds"
            target="_blank"
          >
            Demo
          </LinkText>
          <LinkText
            size="sm"
            href="https://github.com/dylanbussone/happy-little-sound-clouds"
            target="_blank"
          >
            GitHub
          </LinkText>
        </TileLinks>
      </TileShade>
    </Tile>
    <Tile bg="/bagelquest.svg">
      <TileShade>
        <TileTitle size="lg">Bagel Quest</TileTitle>
        <TileLinks>
          <LinkText
            size="sm"
            href="https://bagelquest2020.com/"
            target="_blank"
          >
            Demo
          </LinkText>
          <LinkText
            size="sm"
            href="https://github.com/dylanbussone/bagel-quest"
            target="_blank"
          >
            GitHub
          </LinkText>
        </TileLinks>
      </TileShade>
    </Tile>
  </Work>
);
