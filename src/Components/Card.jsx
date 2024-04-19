import { StyledCard } from "./Styles/Card.styled";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ title, shortDesc, labels, image, slug }) => {
  const [inView, setInView] = useState(false);
  return (
    <InView
      onChange={setInView}
      className={`${inView ? "in-view" : "in-view-false"}`}
      threshold={0.3}
    >
      <StyledCard>
        <div className="thumbnail">
          <img src={image} alt="portfolio-project" />
        </div>
        <div className="description">
          <h3>{title}</h3>
          <p>{shortDesc}</p>
        </div>
        <div className="tags">
          <p>BUILT WITH</p>
          <div className="tags-container">
            {labels.map((label, index) => (
              <span
                key={index}
                className="tag"
                style={{ backgroundColor: `${label.color}` }}
              >
                {label.text}
              </span>
            ))}
          </div>
        </div>
        <div className="btn-container">
          <Link to={`/${slug}`}>SEE PROJECT</Link>
        </div>
      </StyledCard>
    </InView>
  );
};

export default Card;
