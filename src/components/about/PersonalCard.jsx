import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PersonalCard = ({ title, subtitle, text, darkMode }) => {
  const { t } = useTranslation();
  return (
    <Card
      bg={`${darkMode ? "dark" : "light"}`}
      style={{ height: "7.5rem" }}
      className="mb-3 text-center rounded-5"
    >
      <CardBody>
        <CardTitle className="fw-bold pb-1">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>
          {t("at")} <span className="fw-bold">{text}</span>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default PersonalCard;
