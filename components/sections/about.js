import styled from 'styled-components';
import { Text, ImpactText, LinkText } from '../text';
import { HEADER_HEIGHT } from '../header';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: calc(100vh - ${HEADER_HEIGHT});
  padding: 0 3rem;

  ${(p) => p.theme.mediaMax.lg`
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
  `}
`;

const AboutText = styled.div`
  span {
    line-height: 1.5;
    letter-spacing: 0.75px;
  }

  ${(p) => p.theme.mediaMin.lg`
    width: 50%;
    max-width: 650px;
    padding-right: 6rem;
  `}

  ${(p) => p.theme.mediaMax.lg`
    padding-top: 1.5rem;
  `}

  > p {
    margin-bottom: 24px;
  }
`;

const AboutPic = styled.img`
  max-height: 400px;
  max-width: 100%;
  border-radius: 4px;
`;

const About = () => (
  <Wrapper>
    <AboutText>
      <p>
        <ImpactText size="lg">Dylan Bussone</ImpactText>{' '}
        <Text>is a software engineer based in</Text>{' '}
        <ImpactText size="lg">Seattle</ImpactText>{' '}
        <Text>
          with a focus on web development, frontend performance, and responsive
          user experience.
        </Text>
      </p>
      <p>
        <Text size="sm">
          I'm currently working at{' '}
          <LinkText size="sm" href="https://www.zillow.com/">
            Zillow
          </LinkText>{' '}
          on the Platform team, optimizing frontend infrastructure and building
          GraphQL services.
        </Text>
      </p>
      <p>
        <Text size="sm">
          Previously, I worked at{' '}
          <LinkText size="sm" href="https://www.socrata.com">
            Socrata
          </LinkText>{' '}
          until it was acquired by Tyler Technologies.
        </Text>
      </p>
    </AboutText>
    <AboutPic src="/crocs.jpg" />
  </Wrapper>
);

export default About;
