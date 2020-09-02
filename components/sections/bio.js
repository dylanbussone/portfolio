import styled from 'styled-components';
import { Text, ImpactText, LinkText } from '../text';
import { HEADER_HEIGHT } from '../header';

const Bio = styled.div`
  display: flex;
  align-items: center;
  min-height: calc(100vh - ${HEADER_HEIGHT});
  padding: 0 3rem;

  ${(p) => p.theme.mediaMax.lg`
    flex-direction: column;
    justify-content: center;
  `}
`;

const BioText = styled.div`
  line-height: 1.5;
  letter-spacing: 0.75px;

  ${(p) => p.theme.mediaMin.lg`
    width: 50%;
    max-width: 650px;
    padding-right: 6rem;
  `}

  ${(p) => p.theme.mediaMax.lg`
    padding-top: 6rem;
    padding-bottom: 3rem;
  `}

  > p {
    margin-bottom: 2rem;
  }
`;

const BioPic = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 4px;
`;

export default () => (
  <Bio>
    <BioText>
      <p>
        <ImpactText size="lg">Dylan Bussone</ImpactText>{' '}
        <Text>is a software engineer based in</Text>{' '}
        <ImpactText size="lg">Seattle</ImpactText>{' '}
        <Text>
          with a focus on web development, frontend performance, and cross-device user
          experience.
        </Text>
      </p>
      <p>
        <Text size="sm">
          I'm currently working at{' '}
          <LinkText size="sm" href="https://www.zillow.com/" target="_blank">
            Zillow
          </LinkText>{' '}
          on the Platform team, optimizing frontend infrastructure and
          maintaining the core GraphQL service.
        </Text>
      </p>
      <p>
        <Text size="xs">
          Previously, I worked at{' '}
          <LinkText size="xs" href="http://socrata.com" target="_blank">
            Socrata
          </LinkText>{' '}
          until it was acquired by Tyler Technologies.
        </Text>
      </p>
    </BioText>
    <BioPic src="/muffin.jpg" />
  </Bio>
);