import Head from 'next/head';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import theme from '../theme';
import cssReset from '../css-reset';
import { Header } from '../components';
import About from '../components/sections/about';
import Work from '../components/sections/work';
import Music from '../components/sections/music';
import { HEADER_HEIGHT } from '../components/header';

const Main = styled.main`
  margin-top: ${HEADER_HEIGHT};
`;

const Section = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT});

  ${(p) =>
    p.bg &&
    css`
      background: ${p.bg};
      background-position: center;
      background-size: cover;
    `}
`;

export default function Home() {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [workRef, workInView] = useInView({ threshold: 0.5 });
  const [musicRef, musicInView] = useInView({ threshold: 0.5 });

  const inView = musicInView
    ? 'Music'
    : workInView
    ? 'Work'
    : aboutInView
    ? 'About'
    : null;

  return (
    <React.Fragment>
      <Head>
        <title>Dylan Bussone | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header inView={inView} />
      <Main>
        <Section id="about" ref={aboutRef}>
          <About />
        </Section>
        <Section id="work" ref={workRef} bg={theme.COLORS.workBackground}>
          <Work />
        </Section>
        <Section id="music" ref={musicRef} bg="url(/bulb.jpg)">
          <Music />
        </Section>
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
