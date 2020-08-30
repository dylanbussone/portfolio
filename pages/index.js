import Head from 'next/head';
import cssReset from '../css-reset';
import { COLORS } from '../theme';
import { Text, ImpactText, Header } from '../components';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dylan Bussone | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div>
          <ImpactText>name</ImpactText> <Text>is based in</Text>{' '}
          <ImpactText>Seattle</ImpactText> <Text>blah blah blah</Text>
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
        a {
          color: ${COLORS.link};
          transition: color 0.3s ease;
          text-decoration: none;
        }
        a:hover {
          color: ${COLORS.linkHover};
        }
      `}</style>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
