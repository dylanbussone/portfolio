import Head from 'next/head';
import styled from 'styled-components';
import theme from '../theme';
import cssReset from '../css-reset';
import { Text, ImpactText, Header } from '../components';

const Main = styled.main`
  padding: 12rem 3rem 5rem;

  ${(p) => p.theme.mediaMin.md`
    margin-top: 75px;
  `}
`;

const Bio = styled.div`
  line-height: 1.5;
  letter-spacing: 0.5px;

  > p {
    margin-bottom: 2rem;
  }

  ${(p) => p.theme.mediaMin.md`
    width: 50%;
  `}
`;

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Dylan Bussone | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main>
        <Bio>
          <p>
            <ImpactText size="lg">Dylan Bussone</ImpactText>{' '}
            <Text>is a software engineer based in</Text>{' '}
            <ImpactText size="lg">Seattle</ImpactText>{' '}
            <Text>
              with a focus on web development, performance, and cross-device
              user experience.
            </Text>
          </p>
          <p>
            <Text>Other text</Text>
          </p>
          <p>
            <Text size="xs">Last text</Text>
          </p>
        </Bio>
      </Main>

      <style jsx global>
        {cssReset}
      </style>
      <style jsx global>{`
        @font-face {
          font-family: Roboto;
          src: url('/Roboto/Roboto-Regular.ttf');
        }
        @font-face {
          font-family: RobotoLight;
          src: url('/Roboto/Roboto-Light.ttf');
        }
        @font-face {
          font-family: RobotoBold;
          src: url('/Roboto/Roboto-Bold.ttf');
        }
        body {
          background: ${theme.COLORS.background};
          color: ${theme.COLORS.text};
          font-family: RobotoLight;
        }
      `}</style>
    </React.Fragment>
  );
}
