// import React from 'react'
import Nav from "../Nav";
import "../../styles/homepage.css";
import UnderLine from "../../../public/assets/common/Under line.png";
import searchPageIcon from "../../../public/assets/common/search-page-icon.svg";
import evaluatePageIcon from "../../../public/assets/common/evaluate-page-icon.svg";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Footer from "../Elements/Footer";

const Homepage = () => {
  return (
    <div>
      <Nav />

      <div className="homepage-content" style={{ minHeight: "100vh" }}>
        <div className="homepage-content-header">
          <h2>
          <FormattedMessage
            id="app.intro"
            defaultMessage="Belstreet evaluates the quality of life in all the {streets} of Brussels."
            values={{
              streets: (
                <span className="special-text">
                  streets of Brussels
                  <img src={UnderLine} alt="" />
                </span>
              ),
            }}
          />
          </h2>
          <p>
          <FormattedMessage defaultMessage="Are you moving and want to be 100% sure that there will be no
            surprises? A noisy or poorly communicated street?" id="hpg.l1" />
          </p>
          <p>
          <FormattedMessage defaultMessage="
            BelStreet is at your side to help you make the right choice." id="hpg.l2" />
          </p>
          <p>
          <FormattedMessage defaultMessage="
            Evaluate your street with a few questions or consult our database to
            consult the evaluation of all the streets in Brussels!" id="hpg.l3" />
          </p>
        </div>
        <div className="page-nav-cards">
          <Link to={"/evaluation-page"} className="page-card">
            <img src={evaluatePageIcon} alt="" />
            <p>
            <FormattedMessage
              id="evaluate.street"
              defaultMessage="Evaluate your street"
            />
            </p>
          </Link>
          <Link to={"/search-page"} className="page-card">
            <img src={searchPageIcon} alt="" />
            <p>
            <FormattedMessage
              id="search.database"
              defaultMessage="Search the database"
              values={{ lineBreak: <br /> }}
            />
            </p>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 44, }}>
      <Footer />
      </div>
    </div>
  );
};

export default Homepage;
