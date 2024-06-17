import { Card, CardBody, CardGroup, CardImg, CardTitle } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ProjectCard = ({
  projectImg,
  projectName,
  githubLink,
  demoLink,
  darkMode,
}) => {
  return (
    <Card
      bg={`${darkMode ? "dark" : "light"}`}
      style={{}}
      className="mb-3 text-center rounded-5"
    >
      <CardImg
        variant="top"
        src={projectImg}
        className="rounded px-4 pt-4"
        alt={`${projectName} - Project`}
      />
      <CardBody>
        <CardTitle className="fw-bold pb-1">{projectName}</CardTitle>
        <CardGroup className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <a
            href={githubLink}
            target="_blank"
            className={`${
              darkMode
                ? "btn btn-outline-light rounded rounded-5 m-2"
                : "btn btn-dark rounded rounded-5 m-2"
            }`}
          >
            GitHub Repo
          </a>
          <a
            href={demoLink}
            target="_blank"
            className={`${
              darkMode
                ? "btn btn-outline-light rounded rounded-5 m-2"
                : "btn btn-dark rounded rounded-5 m-2"
            }`}
          >
            Live Demo
          </a>
        </CardGroup>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
