import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-3 my-4">
      <Container>
        <Nav.Link className="text-center" href="#home">
          <i className="bi bi-arrow-up-circle fs-1 m-1"></i>
        </Nav.Link>
        <Navbar className="justify-content-center border-bottom pb-3 mb-3">
          <Nav className="fs-4 d-flex flex-column flex-md-row text-center">
            <Nav.Link href="#about" className="py-4">
              {t("aboutText")}
            </Nav.Link>
            <Nav.Link href="#projects" className="py-4">
              {t("projectText")}
            </Nav.Link>
            <Nav.Link href="#contact" className="py-4">
              {t("contactText")}
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
      <p className="text-center">
        Copyright &copy; {new Date().getFullYear()} Nicolas Herrera.{" "}
        {t("copyrightText")}
      </p>
    </footer>
  );
};

export default Footer;
