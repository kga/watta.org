import Head from 'next/head'

const links = [
  'https://blog.kga.gg/',
  'https://twitter.com/kga',
  'https://github.com/kga',
  'https://www.mixcloud.com/kgaaa/',
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>watta.org</title>
      </Head>

      <main>
        <h1 className="title">
          watta.org
        </h1>

        <div className="links">
          <ul>
            { links.map((link, index) => <li key={index}><a href={link}>{link}</a></li>) }
          </ul>
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

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          color: #333; 
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
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
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
