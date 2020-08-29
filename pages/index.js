import Head from 'next/head';
import { COLORS } from '../theme';
import { Text, BoldText } from '../components';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dylan Bussone | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <BoldText>name</BoldText> <Text>is based in</Text>{' '}
          <BoldText>Seattle</BoldText> <Text>blah blah blah</Text>
        </div>
      </main>

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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: ${COLORS.background};
          color: ${COLORS.text};
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
