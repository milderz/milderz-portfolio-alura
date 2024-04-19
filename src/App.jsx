import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardsGrid from "./Components/CardsGrid";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section from "./Components/Section";
import SectionHeader from "./Components/SectionHeader";
import SkillsGrid from "./Components/SkillsGrid";
import ContactForm from "./Components/ContactForm";
import { GlobalStyles } from "./Components/Styles/GlobalStyles";
import { ContainerTwoCol } from "./Components/Styles/ContainerTwoCol.styled";
import LetsTalk from "./Components/LetsTalk";
import Button from "./Components/Button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Components/Footer";
import { InView } from "react-intersection-observer";
import ProjectDetailPage from "./Components/ProjectDetailPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [inView, setInView] = useState(false);
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyles />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Section
                id="projects"
                bgColor="gray"
                children={
                  <>
                    <SectionHeader
                      headline="PROJECTS"
                      title="Some projects I have built"
                    />

                    <CardsGrid />
                  </>
                }
              />
              <Section
                id="about"
                bgColor="black"
                children={
                  <>
                    <SectionHeader
                      headline="ABOUT"
                      title="Get to know more about me"
                    />
                    <div>
                      <InView
                        onChange={setInView}
                        className={`${inView ? "in-view" : "in-view-false"}`}
                        threshold={0.5}
                        style={{
                          display: "flex",
                          gap: "3.4rem",
                          flexDirection: "column",
                          alignItems: "start",
                          justifyContent: "center",
                        }}
                      >
                        <p className="text">
                          {
                            "Frontend developer specialized in creating modern websites and apps that help businesses to gain an advantage over their competitors. \n\n Experience with technologies such as HTML, CSS, Javascript, SASS, Styled Components, and React JS. \n\nCurrently learning the basics of UX/UI design to enhance my design skills."
                          }
                        </p>
                        <Button
                          version="mint"
                          text="DOWNLOAD CV"
                          icon={faDownload}
                        />
                      </InView>
                    </div>
                  </>
                }
              ></Section>
              <Section
                id="skills"
                bgColor="gray"
                children={
                  <>
                    <SectionHeader
                      headline="SKILLS"
                      title="Technologies that I like"
                    />
                    <SkillsGrid />
                  </>
                }
              ></Section>
              <Section
                id="contact"
                bgColor="black"
                children={
                  <>
                    <SectionHeader
                      headline="CONTACT"
                      title="Tell me about your project"
                    />
                    <ContainerTwoCol>
                      <ContactForm />
                      <div>
                        <LetsTalk />
                      </div>
                    </ContainerTwoCol>
                  </>
                }
              ></Section>
            </>
          }
        />
        <Route
          path="/:projectSlug"
          element={
            <>
              <Header prevBtnActive={true} />
              <ProjectDetailPage />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
