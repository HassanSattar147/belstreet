import { useState, useEffect } from "react";
import Nav from "../Nav";
import "../../styles/pageThree.css";
import Input from "../Elements/Input";
import Button from "../Elements/Button";
import Filter from "../../../public/assets/common/Filter.png";
import Street from "../../../public/assets/common/Street.png";
import Review from "../../../public/assets/common/Reviews.png";
import Like from "../../../public/assets/common/Like.png";
import UnderLine from "../../../public/assets/common/Under line.png";
import rightBtn from "../../../public/assets/common/rightBtn.png";
import leftBtn from "../../../public/assets/common/leftBtn.png";
import DropDownMenu, { LV } from "../Elements/DropDownMenu";

interface TableDataResponse {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: string[][];
}

const index = ({
  setIsSearchPage,
}: {
  setIsSearchPage: (x: boolean | undefined) => void;
}) => {
  const [response, setResponse] = useState<TableDataResponse>();
  const [municipalityLV, setMunicipalityLV] = useState<LV>();

  const fetchData = () => {
    const myHeaders = new Headers();

    const raw =
      "draw=1&columns%5B0%5D%5Bdata%5D=0&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=1&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=2&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=3&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=4&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=5&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=6&columns%5B6%5D%5Bname%5D=&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B7%5D%5Bdata%5D=7&columns%5B7%5D%5Bname%5D=&columns%5B7%5D%5Bsearchable%5D=true&columns%5B7%5D%5Borderable%5D=true&columns%5B7%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B7%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B8%5D%5Bdata%5D=8&columns%5B8%5D%5Bname%5D=&columns%5B8%5D%5Bsearchable%5D=true&columns%5B8%5D%5Borderable%5D=true&columns%5B8%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B8%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B9%5D%5Bdata%5D=9&columns%5B9%5D%5Bname%5D=&columns%5B9%5D%5Bsearchable%5D=true&columns%5B9%5D%5Borderable%5D=true&columns%5B9%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B9%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B10%5D%5Bdata%5D=10&columns%5B10%5D%5Bname%5D=&columns%5B10%5D%5Bsearchable%5D=true&columns%5B10%5D%5Borderable%5D=true&columns%5B10%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B10%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B11%5D%5Bdata%5D=11&columns%5B11%5D%5Bname%5D=&columns%5B11%5D%5Bsearchable%5D=true&columns%5B11%5D%5Borderable%5D=false&columns%5B11%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B11%5D%5Bsearch%5D%5Bregex%5D=false&start=0&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&filter_Commune=&filter_Rue=";

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:3030/Fetch.php", requestOptions)
      .then((response) => response.text())
      .then((response) => JSON.parse(response))
      .then((result) => setResponse(result as TableDataResponse))
      .catch((error) => console.log("error", error));
  };

  useEffect(fetchData, []);

  useEffect(() => {
    console.log(response);
  }, [response]);

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
              <DropDownMenu
                options={[
                  { value: "id1", label: "id1: Hello world" },
                  { value: "id2", label: "id2: khello" },
                  { value: "id3", label: "id3: world" },
                  { value: "id4", label: "id4: world Khello" },
                  { value: "id5", label: "id5: bye" },
                ]}
                selectedLV={municipalityLV}
                setSelectedLV={setMunicipalityLV}
              />
            </div>
            <div className="input_data-items">
              <label className="input_label">Street: </label>
              <Input placeholder="Choose Your Street" />
            </div>
            <Button
              onClick={() => {}}
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
        <Button
          onClick={() => {
            setIsSearchPage(undefined);
          }}
          text="Back To Home"
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default index;
