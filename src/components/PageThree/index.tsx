import React, { useState } from "react";
import Nav from "../Nav";
import "../../styles/pageThree.css";
import Input from "../Elements/Input";
import Buttons from "../Elements/Buttons";
import Filter from "../../../public/assets/common/Filter.png";
import Street from "../../../public/assets/common/Street.png";
import Review from "../../../public/assets/common/Reviews.png";
import Like from "../../../public/assets/common/Like.png";
import UnderLine from "../../../public/assets/common/Under line.png";
import rightBtn from "../../../public/assets/common/rightBtn.png";
import leftBtn from "../../../public/assets/common/leftBtn.png";
import DropdowMenus from "../Elements/DropdowMenus";

const index = () => {
  // const fetchData = async () => {
  //   const res = await fetch("http://localhost:3030/Fetch.php", {
  //     headers: {
  //       accept: "application/json, text/javascript, */*; q=0.01",
  //       "accept-language": "en-US,en;q=0.9,ur;q=0.8",
  //       "cache-control": "no-cache",
  //       "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //       pragma: "no-cache",
  //       "sec-ch-ua":
  //         '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
  //       "sec-ch-ua-mobile": "?0",
  //       "sec-ch-ua-platform": '"macOS"',
  //       "sec-fetch-dest": "empty",
  //       "sec-fetch-mode": "cors",
  //       "sec-fetch-site": "same-origin",
  //       "x-requested-with": "XMLHttpRequest",
  //     },
  //     referrer: "https://www.belstreet.com/Recherche.html",
  //     referrerPolicy: "strict-origin-when-cross-origin",
  //     body: "draw=1&columns%5B0%5D%5Bdata%5D=0&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=1&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=2&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=3&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=4&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=5&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=6&columns%5B6%5D%5Bname%5D=&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B7%5D%5Bdata%5D=7&columns%5B7%5D%5Bname%5D=&columns%5B7%5D%5Bsearchable%5D=true&columns%5B7%5D%5Borderable%5D=true&columns%5B7%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B7%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B8%5D%5Bdata%5D=8&columns%5B8%5D%5Bname%5D=&columns%5B8%5D%5Bsearchable%5D=true&columns%5B8%5D%5Borderable%5D=true&columns%5B8%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B8%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B9%5D%5Bdata%5D=9&columns%5B9%5D%5Bname%5D=&columns%5B9%5D%5Bsearchable%5D=true&columns%5B9%5D%5Borderable%5D=true&columns%5B9%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B9%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B10%5D%5Bdata%5D=10&columns%5B10%5D%5Bname%5D=&columns%5B10%5D%5Bsearchable%5D=true&columns%5B10%5D%5Borderable%5D=true&columns%5B10%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B10%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B11%5D%5Bdata%5D=11&columns%5B11%5D%5Bname%5D=&columns%5B11%5D%5Bsearchable%5D=true&columns%5B11%5D%5Borderable%5D=false&columns%5B11%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B11%5D%5Bsearch%5D%5Bregex%5D=false&start=0&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&filter_Commune=&filter_Rue=",
  //     method: "POST",
  //     mode: "cors",
  //     credentials: "include",
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };
  const fetchData = () => {
    var myHeaders = new Headers();

    var raw =
      "draw=1&columns%5B0%5D%5Bdata%5D=0&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=1&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=2&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=3&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=4&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=5&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=6&columns%5B6%5D%5Bname%5D=&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B7%5D%5Bdata%5D=7&columns%5B7%5D%5Bname%5D=&columns%5B7%5D%5Bsearchable%5D=true&columns%5B7%5D%5Borderable%5D=true&columns%5B7%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B7%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B8%5D%5Bdata%5D=8&columns%5B8%5D%5Bname%5D=&columns%5B8%5D%5Bsearchable%5D=true&columns%5B8%5D%5Borderable%5D=true&columns%5B8%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B8%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B9%5D%5Bdata%5D=9&columns%5B9%5D%5Bname%5D=&columns%5B9%5D%5Bsearchable%5D=true&columns%5B9%5D%5Borderable%5D=true&columns%5B9%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B9%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B10%5D%5Bdata%5D=10&columns%5B10%5D%5Bname%5D=&columns%5B10%5D%5Bsearchable%5D=true&columns%5B10%5D%5Borderable%5D=true&columns%5B10%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B10%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B11%5D%5Bdata%5D=11&columns%5B11%5D%5Bname%5D=&columns%5B11%5D%5Bsearchable%5D=true&columns%5B11%5D%5Borderable%5D=false&columns%5B11%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B11%5D%5Bsearch%5D%5Bregex%5D=false&start=0&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&filter_Commune=&filter_Rue=";

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:3030/Fetch.php", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const listArr = [
    {
      text: "Choose Your Municipality",
    },
    {
      text: "Click To Choose Your Municipality",
    },
    {
      text: "Choose Your Municipality",
    },
    {
      text: "Choose Your Municipality",
    },
    {
      text: "Click To Choose Your Municipality",
    },
  ];

  return (
    <div className="page-three">
      <Nav />
      <div className="page-three-content">
        <div className="page-three-content__header">
          <h2 className="color-primary">
            Our database is fed with responses from{" "}
            <span className="brussels">
              residents of Brussels! <img src={UnderLine} alt="" />
            </span>
          </h2>
          <p>
            Are you moving but unsure where you are going? Make the right choice
            by first looking at the results here.
          </p>
        </div>

        <div className="page-three-body">
          <div className="body-data">
            <img src={Filter} alt="" className="body-icon" />
            <p className="body-text">
              Filter by municipality, street and look at the streets with the
              best rating.
            </p>
          </div>

          <div className="body-data">
            <img src={Street} alt="" className="body-icon" />
            <p className="body-text">
              The <span className="bold-text">number "o"</span> in a street
              designates the street in general and is calculated with data from
              users who have not entered a number.
            </p>
          </div>

          <div className="body-data">
            <img src={Review} alt="" className="body-icon" />
            <p className="body-text">
              The average evaluation calculated from the average of all the
              criteria is the <span className="bold-text">"Evaluation"</span>{" "}
              column. You can also see the number of reviews in this issue in
              the <span className="bold-text">"Wishes"</span> column.
            </p>
          </div>

          <div className="body-data">
            <img src={Like} alt="" className="body-icon" />
            <p className="body-text">
              The average takes into account all the criteria, good and bad. The
              higher the average, the better this street number is.
            </p>
          </div>
        </div>
        <div className="choosing-data">
          <div className="choose-data">
            <div className="input_data-items">
              <label className="input_label">Municipality: </label>
              <DropdowMenus listArr={listArr} />
            </div>
            <div className="input_data-items">
              <label className="input_label">Street: </label>
              <Input placeholder="Choose Your Street" />
            </div>
            <Buttons
              text="Filter"
              variant="primary"
              style={{
                width: "300px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="page-three-database">
        <div className="database-title">
          <p className="entries">Showing 1 to 10 or 11 entries</p>
          <div className="pages">
            <p className="page-no">Show 10 &darr;</p>
            <p className="text">Entries</p>
          </div>
        </div>
        <div className="database-table">Entries...</div>
        <div className="pagination">
          <div className="prev-btn">
            <img src={leftBtn} alt="" />
          </div>

          <div className="btn-num">1</div>
          <div className="btn-num">2</div>
          <div className="btn-num">3</div>

          <div className="next-btn">
            <img src={rightBtn} alt="" />
          </div>
        </div>
      </div>
      <div className="back-btn">
        <Buttons text="Back To Home" variant="secondary" />
      </div>
    </div>
  );
};

export default index;
