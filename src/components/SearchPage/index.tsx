import { useState, useEffect, useMemo } from "react";
import Nav from "../Nav";
import "../../styles/pageThree.css";
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
import StreetAutoSuggest from "../EvaluationPage/sub/StreetAutoSuggest";
import { api } from "../../utils/request";
import Footer from "../Elements/Footer";
import { FormattedMessage, useIntl } from "react-intl";

export const municipalityOptions = [
  { value: "1000", label: "1000 - Bruxelles" },
  { value: "1020", label: "1020 - Bruxelles (Laeken)" },
  { value: "1030", label: "1030 - Schaerbeek" },
  { value: "1040", label: "1040 - Etterbeek" },
  { value: "1050", label: "1050 - Ixelles" },
  { value: "1060", label: "1060 - Saint-Gilles" },
  { value: "1070", label: "1070 - Anderlecht" },
  { value: "1080", label: "1080 - Molenbeek-Saint-Jean" },
  { value: "1081", label: "1081 - Koekelberg" },
  { value: "1082", label: "1082 - Berchem-Sainte-Agathe" },
  { value: "1083", label: "1083 - Ganshoren" },
  { value: "1090", label: "1090 - Jette" },
  { value: "1120", label: "1120 - Bruxelles (Neder-Over-Hembeek)" },
  { value: "1130", label: "1130 - Bruxelles (Haren)" },
  { value: "1140", label: "1140 - Evere" },
  { value: "1150", label: "1150 - Woluwe-Saint-Pierre" },
  { value: "1160", label: "1160 - Auderghem" },
  { value: "1170", label: "1170 - Watermael-Boitsfort" },
  { value: "1180", label: "1180 - Uccle" },
  { value: "1190", label: "1190 - ForÃªt" },
  { value: "1200", label: "1200 - Woluwe-Saint-Lambert" },
  { value: "1210", label: "1210 - Saint-Josse-ten-Noode" },
];

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

/* 

AV = plane
vo = neighbor
tf = traffic
ve = green areas
tr = transport
co = commerce
po = total

*/
export interface TableDataResponse {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: DataRow[];
}

export type SortOrder = { orderBy: number, dir: string };

const index = () => {
  const length = 10;
  const [response, setResponse] = useState<TableDataResponse>();
  const [municipalityLV, setMunicipalityLV] = useState<LV>();
  const [selectedRowIndex, setSelectedRowIndex] = useState<number>();
  const [filterStreet, setFilterStreet] = useState("");
  const [selectedfilterStreet, setSelectedFilterStreet] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const intl = useIntl();

  const [order, setOrder] = useState<SortOrder>();

  const handleCloseModal = () => {
    setSelectedRowIndex(undefined);
  };

  const handleOrderChange = (colIndex: number) => {
    if (order?.orderBy === colIndex) {
      return setOrder({ ...order, dir: order?.dir === "asc" ? "desc" : "asc" })
    }
    else {
      return setOrder({ orderBy: colIndex, dir: "asc" });
    }
  }

  const fetchData = (municipality: string, street: string, drawNo?: number) => {
    // const myHeaders = new Headers();
    const draw = typeof drawNo === "number" && drawNo > 0 ? drawNo : 1;

    const params = new URLSearchParams();
    params.append("draw", draw + "");
    // ... (append all other fields)

    params.append("start", (pageNo - 1) * length + "");
    params.append("length", length + "");
    params.append("search[value]", "");
    params.append("search[regex]", false + "");
    params.append("filter_Commune", municipality);
    params.append("filter_Rue", street);
    if (order) {
      params.append("order[0][column]", order.orderBy + "");
      params.append("order[0][dir]", order.dir);
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set Content-Type
      },
      body: params,
    };

    fetch(`${api}/Fetch.php`, requestOptions)
      .then((response) => response.json())
      .then((result) => setResponse(result as TableDataResponse))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchData("", "");
  }, [pageNo, length, order]);

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
        <div style={{ minHeight: "100vh" }}>
        <div className="page-three-content">
          <div className="page-three-content__header">
            <h2 className="color-primary">
              <FormattedMessage
                defaultMessage="Our database is fed with responses from" 
                id="search.label1"
              />{" "}
              <span className="brussels">
                <FormattedMessage
                  defaultMessage="residents of Brussels! "
                  id="search.label2"
                />
                <img src={UnderLine} alt="" />
              </span>
            </h2>
            <p>
              <FormattedMessage
                defaultMessage={"Are you moving but unsure where you are going? Make the right choice by first looking at the results here."}
                id="search.question"
              />
            </p>
          </div>

          <div className="page-three-body">
            <div className="body-data">
              <img src={Filter} alt="" className="body-icon" />
              <p className="body-text">
                <FormattedMessage
                  defaultMessage="Filter by municipality, street and look at the streets with the best rating."
                  id="search.p1"
                />
              </p>
            </div>

            <div className="body-data">
              <img src={Street} alt="" className="body-icon" />
              <p className="body-text">
                
                <FormattedMessage 
                  defaultMessage='The <b>number "o"</b> in a street designates the street in general and is calculated with data from users who have not entered a number.'
                  id="search.p2"
                  values={{
                    b: (msg) => <span className="bold-text">{msg}</span>
                  }}
                />
              </p>
            </div>

            <div className="body-data">
              <img src={Review} alt="" className="body-icon" />
              <p className="body-text">
                <FormattedMessage 
                  defaultMessage='The average evaluation calculated from the average of all the criteria is the <b>"Evaluation"</b> column. You can also see the number of reviews in this issue in the <b>"Wishes"</b> column.'
                  id="search.p3"
                  values={{
                    b: (msg) => <span className="bold-text">{msg}</span>
                  }}
                />
              </p>
            </div>

            <div className="body-data">
              <img src={Like} alt="" className="body-icon" />
              <p className="body-text">
                <FormattedMessage 
                  defaultMessage="The average takes into account all the criteria, good and bad. The higher the average, the better this street number is."
                  id="search.p4"
                />
              </p>
            </div>
          </div>
          <div className="filters-container">
            <div className="filters-container__item">
              <label className="input_label">
                <FormattedMessage defaultMessage="Municipality: " id="commune-" />
              </label>
              <DropDownMenu
                options={municipalityOptions}
                selectedLV={municipalityLV}
                setSelectedLV={setMunicipalityLV}
              />
            </div>
            <div className="filters-container__item">
              <label className="input_label">
                <FormattedMessage defaultMessage="Street: " id="street-" />
              </label>
              <StreetAutoSuggest
                municipality={(municipalityLV?.value || "") as string}
                street={filterStreet}
                setStreet={setFilterStreet}
                selectedStreet={selectedfilterStreet}
                setSelectedStreet={setSelectedFilterStreet}
              />
            </div>
            <Button
              onClick={() => {
                const municipality =
                  (municipalityLV?.value as string | undefined) || "";
                const street = filterStreet;
                fetchData(municipality, street);
              }}
              text={intl.formatMessage({ defaultMessage: "Filter", id: "search.filter" })}
              variant="primary"
              className="filter-btn"
            />
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
                (municipalityLV?.value as string | undefined) || "";
              const street = filterStreet;
              fetchData(municipality, street, newPageNo);
            }}
            onOrder={handleOrderChange}
            order={order}
          />
        </div>
        <div className="back-btn">
          <Link to={"/"}>
            <Button
              onClick={() => {}}
              text={intl.formatMessage({ defaultMessage: "Back To Home", id: "search.backtohome" })}
              variant="secondary"
            />
          </Link>
        </div>
        </div>
        <Footer />
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
