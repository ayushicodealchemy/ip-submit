import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <header className={clsx("hero hero--primary")}>
        <div className="container">
          <Heading
            as="h1"
            className="hero__title"
            style={{ textTransform: "uppercase" }}
          >
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <Link
              to="/docs/InputField"
              className="button button--secondary button--lg"
            >
              Get Start
            </Link>
          </div>
        </div>
      </header>
      <div className="container">
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <Heading as="h1" className="hero__title">
            React Dynamic JSON Form Generator
          </Heading>
          <p
            style={{
              paddingLeft: "2px",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            The React Dynamic Form Generator streamlines the creation of dynamic
            forms within React applications. Utilizing a JSON-based
            configuration, the tool facilitates the seamless development and
            management of intricate forms, complete with diverse input
            components and customizable validations.
          </p>
          <Heading
            as="h3"
            style={{
              fontSize: "25px",
            }}
          >
            Key Features:
          </Heading>
          <div>
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
          <div>
            <Heading
              as="h3"
              style={{
                marginTop: "20px",
                fontSize: "25px",
              }}
            >
              Documentation :
            </Heading>
            <p>
              For a comprehensive understanding of the library's capabilities,
              explore additional features and options in the documentation.
              Uncover advanced functionalities and unlock the full potential of
              the React Dynamic Form Generator for your React applications.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
