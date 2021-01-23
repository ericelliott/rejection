import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rejection!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/questions/">
          <a>
            <h1 className="title">
              Rejection <span className="invert">&bull;</span>
            </h1>
            <h1 className="title inverted">
              Acceptance <span className="invert">&bull;</span>
            </h1>
          </a>
        </Link>
      </main>

      <footer></footer>

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

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          color: #95d7b1;
        }

        .title.inverted {
          color: salmon;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
