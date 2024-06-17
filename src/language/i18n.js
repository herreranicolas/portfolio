import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        aboutText: "About",
        aboutTitle: "About Me",
        me: "Me",
        projectText: "Projects",
        contactText: "Contact",
        languageEnglishText: "English",
        languageSpanishText: "Spanish",
        greetingText: "Hello 🖐️, I'm",
        webDeveloperText: "Web Developer",
        cvText: "Download CV",
        cardTitleText: "Experience",
        cardSubtitleText: "Full Stack Initial Tutor",
        at: "at",
        cardText: "Rolling Code School",
        secondCardTitleText: "Education",
        secondCardSubtitleText:
          "Full Stack Career & React Advanced Specialization",
        secondCardText: "Rolling Code School",
        aboutFirstParagraph:
          "Passionate about the idea of creating tools that are useful to people and make their daily lives easier.",
        aboutSecondParagraph:
          "Looking forward to collaborate with dedication and creativity in exciting web experiences.",
        aboutThirdParagraph:
          "Beyond coding, I love listening to music (especially alternative rock), watching series (Friends, The X Files, The Office) and playing videogames.",
        contactTitleText: "Contact Me",
        copyrightText: "All Rights Reserved.",
      },
    },
    es: {
      translation: {
        aboutText: "Acerca de Mí",
        aboutTitle: "Acerca de Mí",
        me: "de Mí",
        projectText: "Proyectos",
        contactText: "Contacto",
        languageEnglishText: "Inglés",
        languageSpanishText: "Español",
        greetingText: "Hola 🖐️, Soy",
        webDeveloperText: "Desarrollador Web",
        cvText: "Descargar CV",
        cardTitleText: "Experiencia",
        cardSubtitleText: "Tutor Full Stack",
        at: "en",
        cardText: "Rolling Code School",
        secondCardTitleText: "Educación",
        secondCardSubtitleText:
          "Carrera Full Stack & Especialización en React Avanzado",
        secondCardText: "Rolling Code School",
        aboutFirstParagraph:
          "Apasionado por la idea de crear herramientas que sean útiles para las personas y facilitarles su vida diaria.",
        aboutSecondParagraph:
          "Con mucho entusiasmo de poder colaborar con dedicación y creatividad en emocionantes experiencias web.",
        aboutThirdParagraph:
          "Además de programar, amo escuchar música (especialmente rock alternativo), mirar series (Friends, Los expedientes secretos X, The Office) y jugar videojuegos.",
        contactTitleText: "Contáctame",
        copyrightText: "Todos los derechos reservados.",
      },
    },
  },
});

export default i18n;
