import { useState, useEffect, useMemo } from "react";
import Nav from "../Nav";
import "../../styles/pageThree.css";
import Input from "../Elements/Input";
import Button from "../Elements/Button";
import Filter from "../../../public/assets/common/Filter.png";
import Street from "../../../public/assets/common/Street.png";
import Review from "../../../public/assets/common/Reviews.png";
import Like from "../../../public/assets/common/Like.png";
import UnderLine from "../../../public/assets/common/Under line.png";
import DropDownMenu, { LV } from "../Elements/DropDownMenu";
import { Link } from "react-router-dom";
import Modal from "../Elements/Modal";
import RowDetailsModal from "./RowDetailsModal";
import EntriesTable from "./EntriesTable";

export type DataRow = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export interface TableDataResponse {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: DataRow[];
}

const index = () => {
  const length = 10;
  const [response, setResponse] = useState<TableDataResponse>();
  const [municipalityLV, setMunicipalityLV] = useState<LV>();
  const [selectedRowIndex, setSelectedRowIndex] = useState<number>();
  const [filterStreet, setFilterStreet] = useState("");
  const [pageNo, setPageNo] = useState(1);

  const handleCloseModal = () => {
    setSelectedRowIndex(undefined);
  };

  const fetchData = (municipality: string, street: string, drawNo?: number) => {
    const myHeaders = new Headers();
    const draw = typeof drawNo === "number" && drawNo > 0 ? drawNo : 1;
  
    const params = new URLSearchParams();
    params.append("draw", draw + "");
    // ... (append all other fields)
  
    params.append("start", ((pageNo - 1) * length) + "");
    params.append("length", length + "");
    params.append("search[value]", "");
    params.append("search[regex]", false + "");
    params.append("filter_Commune", municipality);
    params.append("filter_Rue", street);
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set Content-Type
      },
      body: params,
    };
  
    fetch("http://192.168.18.5/belstreet/Fetch.php", requestOptions)
      .then((response) => response.json())
      .then((result) => setResponse(result as TableDataResponse))
      .catch((error) => console.log("error", error));
  };

  const fetchAutofillData = async () => {
    const formData = new FormData();
    formData.append("action", "submit");
    formData.append("token", "03AFcWeA4itAVmIMsZdzrU1Bk4Jd5fRcJk65yom3il939jzjP7NXr0x-t9Y7EezGtuUGZvk5cc7XGuRym18tF9HaB7TkqlcnG-CIt9HPpFIGZb0sckTj-BlQvWcerzgkPoeXPOlcGCv-6aVEtaEFcUtUcoBdZdIsnSqVmvAvKAqs0UzJoWI_uS0HH8Erp72xJ5pFDglGZPAmf8Imkn8u53AgTQYV56g47aTCpeQlVy_MqIH-TLFVROcmFihlocbAXPddbyqsd7gZp2BiqbweiD_7pnwgrmhaLch_shOUrVl7X7jT1kz3tZdseghEmH9tmco7pMzxKyH_V-d-sPX5AVqnG6TcFW0U1m7bZS_v0RmKh_fZfzEMXaGahdY0JsMSL2Abk0kqKEVLbMRdkEBYnQQBv4iiPGSDBi9kJPvjvSjXJhhUvV4VvcWDGUQPwCU0mbPWTXj-FwqxS62ga_BWHA0v0SJlrfVEcYv44GQJ70rInuKwdoLaZuvsfyiDCBtTcP7tfBEAXMGXW-lh1P1LW8K1mRLxDIjIKhu6-ZH2qtNGw3HeFFmC-JWyPUETHZkDXAs2rc29o3oJ1qM1jutQKtR-eWUTz6sbmrRaaNDt_shNvxaylSj6adkAA");
    formData.append("commune", "1050"); //should change depending on the value selected by user. (Municiplity dropdown)
    formData.append("rue", "rue"); // Search parameter
    // You can add more form fields here as needed.
  
    const res = await fetch("http://localhost:3030/Autofill.php", {
      body: formData,
      method: "POST",
      mode: "cors",
    });
  
    const data = await res.json();
  
    console.log("{{Autofill data}}", data);
  };

  const fetchComments = async () => {
    const res = await fetch("http://localhost:3030/Modal_comments.php", {
      referrer: "https://www.belstreet.com/Recherche.html",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "filter_Ruef=Rue+de+l'Industrie&Num=0&Count=3",
      method: "POST",
      mode: "cors",
    });
    const data = await res.json();
    console.log("{{{comments data}}}", data);
  };

  useEffect(() => {
    fetchData("", "");
    fetchComments();
    fetchAutofillData();
  }, [pageNo, length]);

  useEffect(() => {
    const handleViewDetails = (e: Event) => {
      const index = (e as CustomEvent).detail.rowIndex as number;
      setSelectedRowIndex(index);
    };

    window.addEventListener("view-details", handleViewDetails);
    return () => {
      window.removeEventListener("view-details", handleViewDetails);
    };
  }, []);

  const dataForModal = useMemo(() => {
    if (
      typeof selectedRowIndex === "number" &&
      response &&
      response.data &&
      response.data.length > 0
    )
      return response.data[selectedRowIndex];
  }, [selectedRowIndex, response]);

  return (
    <>
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
              Are you moving but unsure where you are going? Make the right
              choice by first looking at the results here.
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
                designates the street in general and is calculated with data
                from users who have not entered a number.
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
                The average takes into account all the criteria, good and bad.
                The higher the average, the better this street number is.
              </p>
            </div>
          </div>
          <div className="choosing-data">
            <div className="choose-data">
              <div className="input_data-items">
                <label className="input_label">Municipality: </label>
                <DropDownMenu
                  options={[
                    { value: "id1", label: "Hello world" },
                    { value: "id2", label: "khello" },
                    { value: "id3", label: "world" },
                    { value: "id4", label: "world Khello" },
                    { value: "id5", label: "bye" },
                  ]}
                  selectedLV={municipalityLV}
                  setSelectedLV={setMunicipalityLV}
                />
              </div>
              <div className="input_data-items">
                <label className="input_label">Street: </label>
                <Input
                  placeholder="Choose Your Street"
                  value={filterStreet}
                  valueSetter={setFilterStreet}
                />
              </div>
              <Button
                onClick={() => {
                  const municipality =
                    (municipalityLV?.label as string | undefined) || "";
                  const street = filterStreet;
                  fetchData(municipality, street);
                }}
                text="Filter"
                variant="primary"
                className="filter-btn"
              />
            </div>
          </div>
        </div>
        <div className="page-three-database">
          <EntriesTable
            responseData={response?.data}
            totalRecods={response?.recordsTotal || 0}
            pageNo={pageNo}
            setPageNo={setPageNo}
            onPaginationChange={(newPageNo) => {
              const municipality =
                (municipalityLV?.label as string | undefined) || "";
              const street = filterStreet;
              fetchData(municipality, street, newPageNo);
            }}
          />
        </div>
        <div className="back-btn">
          <Link to={"/"}>
            <Button
              onClick={() => {}}
              text="Back To Home"
              variant="secondary"
            />
          </Link>
        </div>
      </div>
      <Modal
        isOpen={typeof selectedRowIndex === "number"}
        onClose={handleCloseModal}
        hideCloseBtn
      >
        <RowDetailsModal onClose={handleCloseModal} dataRow={dataForModal} />
      </Modal>
    </>
  );
};

export default index;
