import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ProfileImg from "../../assets/profile-img.jpg";
import CV from "../../assets/CV.pdf";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <>
      <section className="my-3 d-flex justify-content-center align-items-center">
        <Container>
          <Row className="text-center">
            <Col xs={12} md={6}>
              <Image
                src={ProfileImg}
                roundedCircle
                fluid
                className="border border-1 border-dark-subtle mb-3"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <Col xs={12} className="mb-2">
                <span>{t("greetingText")}</span>
                <h1 className="fw-bold title">Nicolas Herrera</h1>
                <h2>{t("webDeveloperText")}</h2>
              </Col>
              <Col xs={12}>
                <a
                  className={`${
                    darkMode
                      ? "btn btn-outline-light rounded rounded-5"
                      : "btn btn-dark rounded rounded-5"
                  }`}
                  href={CV}
                  download={true}
                >
                  {t("cvText")}
                  <i className="bi bi-download ps-1"></i>
                </a>
              </Col>
              <Col xs={12}>
                <a
                  href="https://github.com/herreranicolas"
                  target="_blank"
                  className="btn"
                >
                  <i className="bi bi-github fs-1"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolasherrera95/"
                  target="_blank"
                  className="btn"
                >
                  <i className="bi bi-linkedin fs-1"></i>
                </a>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Profile;
