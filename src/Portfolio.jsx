import "./Portfolio.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
