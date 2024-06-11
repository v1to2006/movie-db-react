import { Col, Container, Image, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid="md" className="mt-2 pb-5 p-3">
        <div className="border-top border-secondary mt-4 mb-5"></div>
        <Row className="row-cols-1 row-cols-md-3 mt-3 text-center align-items-center">
          <Col className="">
            <Row>
              <div className="col-12">
                <span className="me-1 text-body-secondary">
                  Built By Aleksei Alehin
                </span>
                <br />
                <img
                  src="/patrick-smile.png"
                  className="mt-2"
                  alt="Creator logo"
                  height={50}
                />
              </div>
              <div className="col-12 mt-2">
                <span className="text-body-secondary">
                  &copy; 2024 Aleksei Alehin
                </span>
              </div>
            </Row>
          </Col>
          <Col className="text-center">
            <a href="/">
              <img src="/movie-icon.svg" className="bi" height="40" />
            </a>

            <div className="d-flex align-items-center justify-content-center flex-wrap gap-1 mt-4 text-body-secondary">
              Powered by{" "}
              <a href="https://www.themoviedb.org/" target="_blank">
                <img src="/tmdb-logo.svg" height={10} alt="TMDB Logo" />
              </a>
            </div>
          </Col>
          <Col className="text-md-end">
            <Row>
              <div className="col-12">
                <a
                  href="https://www.youtube.com/channel/UCQlQ4E2cxs3dk3ofYp9zjDA"
                  target="_blank"
                  className="p-2"
                >
                  <i
                    className="bi bi-youtube text-body-secondary"
                    style={{ fontSize: "20px" }}
                  ></i>
                </a>
                <a
                  href="https://x.com/v1to87672946"
                  target="_blank"
                  className="p-2"
                >
                  <i
                    className="bi bi-twitter-x text-body-secondary"
                    style={{ fontSize: "20px" }}
                  ></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/aleksei-alehin-196548257/"
                  target="_blank"
                  className="p-2"
                >
                  <i
                    className="bi bi-linkedin text-body-secondary"
                    style={{ fontSize: "20px" }}
                  ></i>
                </a>
                <a
                  href="https://github.com/v1to2006"
                  className="p-2"
                  target="_blank"
                >
                  <i
                    className="bi bi-github text-body-secondary"
                    style={{ fontSize: "20px" }}
                  ></i>
                </a>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
