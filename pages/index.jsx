import { Helmet } from "react-helmet";
import { Loader } from 'rsuite';
// components
import Text from "../components/Text";

export default function Index() {
  const loadingText = "Flowers will bloom again, people will never be young again (花有重开日 人无再少年) ..";
  const [toggleMode, setToggleMode] = React.useState(false);
  const [loader, setLoader] = React.useState(true);
  const handleToggle = () => {
    setToggleMode(!toggleMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", !toggleMode);
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setToggleMode(JSON.parse(localStorage.getItem("darkMode")));
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, []);

  return loader ? (
    <div style={{fontFamily: "monospace", fontSize: "1.2rem"}}>
      <Loader center content={loadingText} />
    </div>
  ) : (
    <div className="container theme-mode">
      <Helmet>
        <title>Dameng - DamengRandom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="dameng"></meta>
        <meta name="keywords" content="dameng, damengrandom, tipify, damon, harley corgi, HarleyCorgi, harleycorgi, random, meng, da, damon wu, DamengRandom, dameng random, rand, roller, roll, Roller" />
        <meta name="description" content="please come to damengrandom.now.sh" />
        <meta property="og:title" content="damengrandom" key="ogtitle" />
        <meta property="og:description" content="please come to damengrandom.now.sh" key="ogdesc" />
        <meta property="og:site_name" content="damengrandom" key="ogsitename" />
      </Helmet>
      <div className="section fit">
        <div className="table">
          <div className="table-content">
            <Text className="theme-font theme-text" aria-hidden="true">
              <b onClick={handleToggle}>{toggleMode ? "G'day" : "Hello"}</b>~~ I am {" "}
              <a
                aria-label="Damengradom"
                href="https://github.com/DamengRandom"
                target="_blank">
                Damengradom
              </a>,{" "}
              who is a web developer. I developed some side projects
            </Text>
            <Text className="theme-font theme-text pl-12" aria-hidden="true">
              <a aria-label="Roller" href="https://speedi.netlify.app/" target="_blank" aria-hidden="true">Roller</a>,{" "}
            </Text>
            <Text className="theme-font theme-text" aria-hidden="true">
              <a aria-label="Tipify" href="https://technotes.vercel.app" target="_blank" aria-hidden="true">Tipify</a>{" "}
            </Text>
            <Text className="theme-font theme-text" aria-hidden="true">
              for fun. I love games 🎮, movies 🍿, jogging 👟, <strike>blockchain 🔗</strike>, bartending 🍹 ..
            </Text>
          </div>
        </div>
      </div>
      <style global jsx>{`
        html,
        body {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }

        b {
          cursor: pointer;
        }

        #__next {
          height: 100%;
        }

        .container {
          height: 100%;
          overflow: auto;
        }

        .theme-mode {
          background-color: ${toggleMode ? '#121212' : '#fff'};
          color: ${toggleMode ? '#fff' : '#121212'};
        }

        .theme-mode a {
          color: ${toggleMode ? '#fff' : '#121212'};
          border-bottom: 3px solid ${toggleMode ? '#fff' : '#121212'};
        }

        .section {
          position: relative;
          width: 100%;
        }

        .fit {
          height: 100%;
        }

        .table {
          display: table;
          width: 100%;
          height: 100%;
        }

        .table-content {
          display: table-cell;
          vertical-align: middle;
          padding: 4rem;
        }

        .theme-font {
          font-family: 'Nanum Gothic Coding', monospace;
        }

        .theme-text {
          display: inline;
          font-size: 2rem;
          line-height: 1.8;
        }

        .theme-text > a {
          text-decoration: none;
          font-size: 2.4rem;
        }

        .pl-12 {
          padding-left: 0.75rem; // 12px
        }

        @media only screen and (max-width: 500px) {
          .table-content {
            padding: 1rem;
          }

          .theme-text {
            font-size: 1.4rem;
            line-height: 1.6;
          }

          .theme-text > a {
            font-size: 1.8rem;
          }
        }
        @media only screen and (max-width: 321px) {
          .theme-text {
            font-size: 1.2rem;
          }

          .theme-text > a {
            font-size: 1.6rem;
          }
        }
      `}
      </style>
    </div>
  )
};
