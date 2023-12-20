import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import icons from "../../static/icons/index";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <main>
        <div className="top-container">
          <div className="left-content">
            <h1 className="left-content-h1">{siteConfig.title}</h1>
            <p className="left-content-p">{siteConfig.tagline}</p>
            <Link to="/docs/InputField" className="start-button">
              <button class="css-buttons-io-button">
                Get start
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
          <div className="right-content">
            <icons.poster />
          </div>
        </div>
        <div className="divider div-transparent" />

        <div className="middle-container">
          <div className="middle-content">
            <h1>React Dynamic Json Form Generator</h1>
            <p className="middle-content-p">
              The React Dynamic Json Form Generator streamlines the creation of
              dynamic forms within React applications. Utilizing a JSON-based
              configuration, the tool facilitates the seamless development and
              management of intricate forms, complete with diverse input
              components and customizable validations.
            </p>
          </div>

          <div className="middle-content">
            <h2>Key Features:</h2>
            <li>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                JSON-based Configuration :{" "}
              </span>
              Easily define and modify form structures through a simple and
              intuitive JSON format.
            </li>
            <li>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                Custom Validations :{" "}
              </span>
              Tailor validations to suit specific requirements, ensuring data
              integrity and accuracy.
            </li>
            <li>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                Diverse Input Components :{" "}
              </span>
              Access a variety of input components to enhance form interactivity
              and user experience.
            </li>
          </div>

          <div className="middle-content">
            <h2>Documentation :</h2>
            <p className="middle-content-p">
              For a comprehensive understanding of the library's capabilities,
              explore additional features and options in the documentation.
              Uncover advanced functionalities and unlock the full potential of
              the React Dynamic Form Generator for your React applications.
            </p>
          </div>
        </div>

        <div className="divider div-transparent" />

        <div className="playground hero hero--primary">
          <h2 className="playground-heading">Playground</h2>
          <div className="playground-preview">
            <iframe
              src={"https://react-ip-submit-web.onrender.com/preview"}
              // src={"https://ipsubmit.onrender.com/preview"}
              height={"100%"}
              width={"100%"}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
