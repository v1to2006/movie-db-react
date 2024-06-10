import { Container, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid="md">
        <footer
          className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 border-top bg-body-tertiary"
          data-bs-theme="dark"
        >
          <p className="col-md-4 mb-0 text-body-secondary">
            © 2024 Aleksei Alehin
          </p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img
              src="../public/movie-icon.svg"
              className="bi me-2"
              width="40"
              height="32"
            />
          </a>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="bi bi-twitter-x text-body-secondary"
                href="https://x.com/v1to87672946"
              />
            </li>
            <li className="ms-3">
              <a
                className="bi bi-github text-body-secondary"
                href="https://github.com/v1to2006"
              />
            </li>
            <li className="ms-3">
              <a
                className="bi bi-linkedin text-body-secondary"
                href="https://www.linkedin.com/in/aleksei-alehin-196548257/"
              />
            </li>
          </ul>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
