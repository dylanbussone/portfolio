import React, { useEffect } from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import cssReset from '../css-reset';
import { Picture, Header } from '../components';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Music from '../components/sections/music';
import { HEADER_HEIGHT } from '../components/header';

const Main = styled.main`
  margin-top: ${HEADER_HEIGHT};
`;

const Section = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  ${(p) => p.theme.mediaMax.lg`
    margin-bottom: 12rem;
  `}
`;

const GlobalStyle = createGlobalStyle`
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
    background: ${(p) => p.theme.COLORS.background};
    color: ${(p) => p.theme.COLORS.text};
    font-family: RobotoLight;
  }
  p,
  div,
  span,
  a {
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  html {
    font-size: 12px;
  }
  ${(p) => p.theme.mediaMax.lg`
    html {
      font-size: 6px;
    }
  `}
`;

export default function Home() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-54162808-1');
  });

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
        <title>Dylan Bussone</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-54162808-1"
        />
      </Head>

      <Header inView={inView} />
      <Main>
        <Picture webpSrc="/rainier.webp" jpgSrc="/rainier.jpg" fadeTop cover />
        <Section id="about" ref={aboutRef}>
          <About />
        </Section>
        <Picture webpSrc="/ivars.webp" jpgSrc="/ivars.jpg" fadeBottom hideForMobile />
        <Section id="projects" ref={projectsRef}>
          <Projects />
        </Section>
        <Section id="music" ref={musicRef}>
          <Music />
        </Section>
      </Main>

      <style jsx global>
        {cssReset}
      </style>
      <GlobalStyle />
    </React.Fragment>
  );
}
