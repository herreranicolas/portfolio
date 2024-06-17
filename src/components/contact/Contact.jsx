import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="my-3 py-3" id="contact">
      <Container className=" d-flex flex-column justify-content-center align-items-center">
        <h3 className="title text-center fw-bold mb-4">
          {t("contactTitleText")}
        </h3>
        <Card className="rounded rounded-5">
          <CardBody>
            <CardGroup className="d-flex justify-content-center align-items-center">
              <a
                href="https://github.com/herreranicolas"
                target="_blank"
                className="btn"
              >
                <i className="bi bi-github fs-1 me-1"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasherrera95/"
                target="_blank"
                className="btn"
              >
                <i className="bi bi-linkedin fs-1 me-1"></i>LinkedIn
              </a>
            </CardGroup>
          </CardBody>
        </Card>
        <Row></Row>
      </Container>
    </section>
  );
};

export default Contact;
