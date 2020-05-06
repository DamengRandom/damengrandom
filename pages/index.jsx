import Text from "../components/Text";

export default function Index() {
  return (
    <div className="container">
      <div className="section fit">
        <div className="table">
          <div className="table-content">
            <Text className="theme-font theme-text">
              G'day !! I am <a href="https://github.com/DamengRandom" target="_blank">Damengradom</a>, who is a web developer. I developed some side projects
            </Text>
            <Text className="theme-font theme-text pl-12"><a href="https://speedi.netlify.app/" target="_blank">Speedi</a>, </Text>
            <Text className="theme-font theme-text"><a href="https://dm-tipify.netlify.app/" target="_blank">Tipify(DM)</a> </Text>
            <Text className="theme-font theme-text">for fun. I love esports games 🎮, movies 🍿, jogging 👟 ..</Text>
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

        #__next {
          height: 100%;
        }

        .container {
          height: 100%;
          overflow: auto;
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
