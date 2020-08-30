import Head from 'next/head';
import cssReset from '../css-reset';
import { COLORS } from '../theme';
import { Text, ImpactText, Header } from '../components';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Dylan Bussone | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className="bio">
          <ImpactText>Dylan Bussone</ImpactText>{' '}
          <Text>is a software engineer based in</Text>{' '}
          <ImpactText>Seattle</ImpactText>{' '}
          <Text>
            with a focus on web development, performance, and cross-device user
            experience.
          </Text>
        </div>
      </main>

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
          background: ${COLORS.background};
          color: ${COLORS.text};
          font-family: RobotoLight;
        }
      `}</style>
      <style jsx>{`
        main {
          margin-top: 75px;
          padding: 12rem 3rem 5rem;
        }

        .bio {
          width: 50%;
          line-height: 1.5;
        }
      `}</style>
    </React.Fragment>
  );
}
