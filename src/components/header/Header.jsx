import "./header.css";
import { useContext } from "react";
import { Button, Col, Dropdown, DropdownButton, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ThemeContext from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();
  return (
    <header id="home">
      <Navbar expand="lg" className="fw-bold">
        <Container>
          <Navbar.Brand
            href="/"
            className="fs-2 border border-1 rounded rounded-5 p-2"
          >
            NH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center fs-4 justify-content-center align-items-center">
              <Col lg={4} className="text-lg-end">
                <Nav.Link href="#about" className="py-4">
                  {t("aboutText")}
                </Nav.Link>
              </Col>
              <Nav.Link href="#projects" className="py-4">
                {t("projectText")}
              </Nav.Link>
              <Nav.Link href="#contact" className="py-4">
                {t("contactText")}
              </Nav.Link>
              <Container className="py-4">
                <Button
                  variant={darkMode ? "outline-light" : "dark"}
                  className="rounded rounded-5"
                  onClick={toggleTheme}
                >
                  {darkMode ? (
                    <i className="bi bi-sun fs-4"></i>
                  ) : (
                    <i className="bi bi-moon-stars fs-4"></i>
                  )}
                </Button>
              </Container>
              <Container className="py-4 my-lg-0 w-50">
                <DropdownButton
                  variant={darkMode ? "outline-light" : "dark"}
                  id="dropdown-basic-button"
                  title={<i className="bi bi-globe fs-4"></i>}
                >
                  <Dropdown.Item
                    as="button"
                    onClick={() => i18n.changeLanguage("en")}
                  >
                    {t("languageEnglishText")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => i18n.changeLanguage("es")}
                  >
                    {t("languageSpanishText")}
                  </Dropdown.Item>
                </DropdownButton>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
