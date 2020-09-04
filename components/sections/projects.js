import styled from 'styled-components';
import { Text, ImpactText, LinkText } from '../text';

const Projects = styled.div`
  padding: 5rem 3rem;
`;

const Tiles = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${(p) => p.theme.mediaMax.lg`
    grid-template-columns: 1fr;
  `}
`;

const Tile = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(p) => p.theme.mediaMin.lg`
    &:nth-child(1) {
      margin-right: 1rem;
    }
    &:nth-child(2) {
      margin-left: 1rem;
    }
  `}

  ${(p) => p.theme.mediaMax.lg`
    margin-bottom: 4rem;
  `}

  > * {
    margin-bottom: 1rem;
  }
`;

const TileImg = styled.div`
  background: url('${(p) => p.bg}');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 30vh;
  width: 100%;
`;

const Links = styled.div`
  > * {
    margin-right: 1rem;
  }
`;

export default () => (
  <Projects>
    <ImpactText size="lg">Projects</ImpactText>
    <Tiles>
      <Tile>
        <TileImg bg="/happy-little-sound-clouds.gif" />
        <ImpactText size="lg">Happy Little Sound Clouds</ImpactText>
        <Text size="sm">
          I built a custom audio player and canvas soundwave progress bar.
          <br />
          The waveform is drawn dynamically based on window size, and bars are
          re-chunked & averaged to display an appropriately sized waveform.
        </Text>
        <Links>
          <LinkText
            size="xs"
            href="https://dylanbussone.github.io/happy-little-sound-clouds"
            target="_blank"
          >
            Demo
          </LinkText>
          <span>|</span>
          <LinkText
            size="xs"
            href="https://github.com/dylanbussone/happy-little-sound-clouds"
            target="_blank"
          >
            GitHub
          </LinkText>
        </Links>
      </Tile>
      <Tile>
        <TileImg bg="/bagelquest.svg" />
        <ImpactText size="lg">Bagel Quest 2020</ImpactText>
        <Text size="sm">
          My S.O. is from the east coast and is very passionate about bagels.
          <br />
          So we hosted a bagel competition.
        </Text>
        <Links>
          <LinkText
            size="xs"
            href="https://bagelquest2020.com/"
            target="_blank"
          >
            Demo
          </LinkText>
          <span>|</span>
          <LinkText
            size="xs"
            href="https://github.com/dylanbussone/bagel-quest"
            target="_blank"
          >
            GitHub
          </LinkText>
        </Links>
      </Tile>
    </Tiles>
  </Projects>
);
