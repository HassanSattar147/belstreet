// import React from 'react'
import Nav from "../Nav";
import "../../styles/homepage.css";
import UnderLine from "../../../public/assets/common/Under line.png";
import searchPageIcon from "../../../public/assets/common/search-page-icon.svg";
import evaluatePageIcon from "../../../public/assets/common/evaluate-page-icon.svg";

const Homepage = ({
  setIsSearchPage,
}: {
  setIsSearchPage: (x: boolean | undefined) => void;
}) => {
  return (
    <div>
      <Nav />

      <div className="homepage-content">
        <div className="homepage-content-header">
          <h2>
            Belstreet evaluates the quality of life in all the{" "}
            <span className="special-text">
              streets of Brussels
              <img src={UnderLine} alt="" />
            </span>
            .
          </h2>
          <p>
            Are you moving and want to be 100% sure that there will be no
            surprises? A noisy or poorly communicated street?
          </p>
          <p>BelStreet is at your side to help you make the right choice.</p>
          <p>
            Evaluate your street with a few questions or consult our database to
            consult the evaluation of all the streets in Brussels!
          </p>
        </div>
        <div className="page-nav-cards">
          <div
            className="page-card"
            onClick={() => {
              setIsSearchPage(false);
            }}
          >
            <img src={evaluatePageIcon} alt="" />
            <p>
              Evaluate <br />
              your street
            </p>
          </div>
          <div
            className="page-card"
            onClick={() => {
              setIsSearchPage(true);
            }}
          >
            <img src={searchPageIcon} alt="" />
            <p>
              Search <br />
              the database
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
