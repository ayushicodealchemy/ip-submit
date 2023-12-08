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
    </Layout>
  );
}
