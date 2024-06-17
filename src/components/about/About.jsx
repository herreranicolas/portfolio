import { Col, Container, Row } from "react-bootstrap";
import "./about.css";
import PersonalCard from "./PersonalCard";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h3 className="title fw-bold text-center mb-3 mb-lg-5">
        {t("aboutTitle")}
      </h3>
      <Container>
        <Row className="d-flex flex-column flex-lg-row align-items-center">
          <Col>
            <Row>
              <Col>
                <Col>
                  <PersonalCard
                    title={t("cardTitleText")}
                    subtitle={t("cardSubtitleText")}
                    text={t("cardText")}
                    darkMode={darkMode}
                  />
                </Col>
                <Col>
                  <PersonalCard
                    title={t("secondCardTitleText")}
                    subtitle={t("secondCardSubtitleText")}
                    text={t("secondCardText")}
                    darkMode={darkMode}
                  />
                </Col>
              </Col>
            </Row>
          </Col>
          <Col className="order-lg-first py-2">
            <Row className="text-justify">
              <Col>
                <Col>
                  <p className="lead">{t("aboutFirstParagraph")}</p>
                </Col>
                <Col>
                  <p className="lead">{t("aboutSecondParagraph")}</p>
                </Col>
                <Col>
                  <p className="lead">{t("aboutThirdParagraph")}</p>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
