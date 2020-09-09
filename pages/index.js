import React, { useEffect } from 'react';
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

const Fade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: ${(p) =>
      p.top &&
      css`
    linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 100%)${
      p.bottom && css`,`
    }
    `}
    ${(p) =>
      p.bottom &&
      css`
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 100%)
  `};
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
        <Section bg="url(/rainier.webp)" parallax>
          <Fade bottom />
        </Section>
        <Section id="about" ref={aboutRef}>
          <About />
        </Section>
        <Section bg="url(/ivars.webp)" parallax short>
          <Fade top bottom />
        </Section>
        <Section id="projects" ref={projectsRef}>
          <Projects />
        </Section>
        <Section bg="url('/spice tiger.webp')" parallax short>
          <Fade top bottom />
        </Section>
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
        p,
        div,
        span,
        a {
          line-height: 1.5;
          letter-spacing: 0.5px;
        }
      `}</style>
    </React.Fragment>
  );
}
