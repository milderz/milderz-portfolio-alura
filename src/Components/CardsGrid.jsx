import Card from "./Card";
import { StyledCardsGrid } from "./Styles/CardsGrid.styled";

import Projects from "./../projectsData.json";
import { useEffect, useState } from "react";

const CardsGrid = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(Projects);
  }, []);
  return (
    <StyledCardsGrid>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.projectName}
          shortDesc={project.shortDescription}
          labels={project.labels}
          image={project.mainImage}
          slug={project.slug}
        />
      ))}
    </StyledCardsGrid>
  );
};

export default CardsGrid;
