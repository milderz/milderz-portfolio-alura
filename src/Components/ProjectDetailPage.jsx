import Section from "./Section";
import { StyledProjectDetailPage } from "./Styles/ProjectDetailPage.styled";
import Projects from "../projectsData.json";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import LetsTalk from "./LetsTalk";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import LinkBtn from "./LinkBtn";

const ProjectDetailPage = () => {
  const [projectDetail, setProjectDetail] = useState([]);
  const { projectSlug } = useParams();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setProjectDetail(
      Projects.filter((project) => project.slug === projectSlug)
    );
  }, [projectSlug]);

  return (
    <InView
      onChange={setInView}
      className={`${inView ? "in-view" : "in-view-false"}`}
      threshold={0.125}
    >
      <StyledProjectDetailPage>
        {projectDetail.map((project, index) => (
          <Section key={index}>
            <header className="project-detail-header">
              <h3 className="project-detail-title">{project.projectName}</h3>
              <div className="btns-container">
                <LinkBtn
                  version="mint"
                  size="small"
                  text="GITHUB CODE"
                  icon={faGithub}
                  path={project.githubLink}
                />
                <LinkBtn
                  version="mint"
                  size="small"
                  text="PREVIEW WEBSITE"
                  icon={faEye}
                  path={project.webLink}
                />
              </div>
            </header>
            <img
              className="project-detail-image"
              src={`/${project.mainImage}`}
              alt="project-main"
              height="320px"
            />
            <p className="text">{project.longDescription}</p>
            <div className="labels">
              {project.labels.map((label, index) => (
                <span
                  key={index}
                  className="tag"
                  style={{ backgroundColor: `${label.color}` }}
                >
                  {label.text}
                </span>
              ))}
            </div>
            <LetsTalk />
          </Section>
        ))}
      </StyledProjectDetailPage>
    </InView>
  );
};

export default ProjectDetailPage;
