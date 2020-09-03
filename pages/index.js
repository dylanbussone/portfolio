import Head from 'next/head';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import theme from '../theme';
import cssReset from '../css-reset';
import { Header } from '../components';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Music from '../components/sections/music';
import { HEADER_HEIGHT } from '../components/header';

const Main = styled.main`
  margin-top: ${HEADER_HEIGHT};
`;

const Section = styled.div`
  position: relative;
  min-height: calc(100vh - ${HEADER_HEIGHT});

  ${(p) =>
    p.bg &&
    css`
      background: ${p.bg};
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}

  ${(p) =>
    p.parallax &&
    css`
      background-attachment: fixed;
    `}

  ${(p) =>
    p.short &&
    css`
      min-height: calc(50vh - ${HEADER_HEIGHT});
    `}
`;

export default function Home() {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [musicRef, musicInView] = useInView({ threshold: 0.5 });

  const inView = musicInView
    ? 'Music'
    : projectsInView
    ? 'Projects'
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
        <Section bg="url(/rainier.jpg)" parallax />
        <Section id="about" ref={aboutRef}>
          <About />
        </Section>
        <Section bg="url(/ivars.jpg)" parallax short />
        <Section
          id="projects"
          ref={projectsRef}
          bg={theme.COLORS.projectsBackground}
        >
          <Projects />
        </Section>
        <Section bg="url(/bulb.jpg)" parallax short />
        <Section id="music" ref={musicRef}>
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
