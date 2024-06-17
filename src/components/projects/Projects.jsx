import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import RollingVetPreviewImg from "../../assets/rollingvet-preview.png";
import RollingGifsPreviewImg from "../../assets/rolling-gifs-preview.png";
import RecipesBlogPreviewImg from "../../assets/blog-de-recetas-preview.png";
import ToDoListPreviewImg from "../../assets/lista-de-tareas-preview.png";
import RollingBankPreviewImg from "../../assets/rollingbank-preview.png";
import StreamifyPlusPreviewImg from "../../assets/streamifyplus-preview.png";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const projects = [
    {
      projectImg: RollingVetPreviewImg,
      projectName: "Rolling Vet",
      githubLink: "https://github.com/RollingVet-Grupo-2/rollingvet-frontend",
      demoLink: "https://rollingvet-g2.netlify.app/",
    },
    {
      projectImg: RollingGifsPreviewImg,
      projectName: "Rolling Gifs",
      githubLink: "https://github.com/herreranicolas/Rolling-Gifs",
      demoLink: "https://rolling-gifs.netlify.app/",
    },
    {
      projectImg: RecipesBlogPreviewImg,
      projectName: "Recipes Blog",
      githubLink: "https://github.com/herreranicolas/blog-de-recetas-frontend",
      demoLink: "https://blog-de-recetas-nh.netlify.app/",
    },
    {
      projectImg: ToDoListPreviewImg,
      projectName: "To Do List",
      githubLink: "https://github.com/herreranicolas/lista-de-tareas",
      demoLink: "https://herreranicolas.github.io/lista-de-tareas/",
    },
    {
      projectImg: RollingBankPreviewImg,
      projectName: "Rolling Bank",
      githubLink: "https://github.com/herreranicolas/rolling-bank",
      demoLink: "https://rollingbank-nh.netlify.app/",
    },
    {
      id: "6ab",
      projectImg: StreamifyPlusPreviewImg,
      projectName: "Streamify+",
      githubLink: "https://github.com/herreranicolas/streamify-plus",
      demoLink: "https://streamifyplus.netlify.app/",
    },
  ];
  return (
    <section
      id="projects"
      className="my-3 py-3 full-screen d-flex justify-content-center align-items-center"
    >
      <Container>
        <h3 className="fw-bold text-center title mb-4">{t("projectText")}</h3>
        <Row>
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.projectName}>
              <ProjectCard
                projectName={project.projectName}
                projectImg={project.projectImg}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                darkMode={darkMode}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
