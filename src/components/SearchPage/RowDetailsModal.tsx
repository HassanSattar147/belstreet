import React, { useState } from "react";
import icon_plane from "../../../public/assets/common/icon-plane.svg";
import icon_hear from "../../../public/assets/common/icon-hear.svg";
import icon_car from "../../../public/assets/common/icon-car.svg";
import icon_tree from "../../../public/assets/common/icon-tree.svg";
import icon_bus from "../../../public/assets/common/icon-bus.svg";
import icon_cup from "../../../public/assets/common/icon-cup.svg";
import LabeledRatings from "../Elements/LabeledRatings";
import Button from "../Elements/Button";
import { DataRow } from ".";
import { api } from "../../utils/request";
import moment from "moment";
import { FormattedMessage, useIntl } from "react-intl";

interface Comment {
  "0": string;
  "1": string;
  "2": string;
  Alias: string;
  Comments: string;
  Timestamp: string;
}

interface CommentsResponse {
  AVGAV: number;
  AVGVO: number;
  AVGTF: number;
  AVGVE: number;
  AVGTR: number;
  AVGCO: number;
  AVGPO: number;
  Comments: Comment[];
}

const RowDetailsModal = ({
  onClose,
  dataRow,
}: {
  onClose: () => void;
  dataRow: DataRow | undefined;
}) => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [commentsResponse, setCommentsResponse] =
    React.useState<CommentsResponse>();

  if (!dataRow) return;

  const fetchComments = async (
    streetName: string,
    num: string | number,
    count: string | number
  ) => {
    setIsLoading(true);
    
    const formData = new FormData();
    formData.append('filter_Ruef', streetName);
    formData.append('Num', num + "");
    formData.append('Count', count + "");

    const res = await fetch(`${api}/Modal_comments.php`, {
      method: "POST",
      body: formData // Use the FormData object as the request body
    });

const data = await res.json();

    setCommentsResponse(data);
    setIsLoading(false);
  };

  React.useEffect(() => {
    const streetName = dataRow[1];
    const num = dataRow[2];

    fetchComments(streetName, num, 3);
  }, [dataRow]);

  // const [
  //   zipCode,
  //   street,
  //   number,
  //   airplanesNoise,
  //   neighborsNoise,
  //   trafficNoise,
  //   greenSpaces,
  //   transportation,
  //   shops,
  //   assessment,
  //   numberOfVotes,
  // ] = dataRow;

  const emptyFunc = () => {};

  const convert100to5 = (hunderdValue: number) => {
    return (hunderdValue / 100) * 5;
  };

  const MAX_RATING = 5;
  const totalAvgRating = convert100to5(commentsResponse?.AVGPO || 0);
  const pieChartDeg = (totalAvgRating / MAX_RATING) * 360;

  if (isLoading) return <><FormattedMessage defaultMessage="Loading..." id="loading..." /></>;

  if (!commentsResponse) return <><FormattedMessage defaultMessage="No data to show..." id="no_data" /></>;

  const isSingularVote = dataRow[10] == "1";
  const intl = useIntl();

  return (
    <div className="row-details-modal-wrapper">
      <div className="row-details-heading">{dataRow[1]}</div>

      <div className="row-details-body">
        <div className="row-details-body__pie-chart">
          <div
            className="pie"
            style={{
              background: `repeating-conic-gradient(from 0deg, #f29d10 0deg ${pieChartDeg}deg, #817b76 ${pieChartDeg}deg 360deg)`,
            }}
          ></div>
          <div className="num">
            <p>{totalAvgRating.toFixed(1)}</p>
          </div>
        </div>
        <div className="row-details-body__ratings">
          <div className="all-ratings">
            {[
              {
                selectedCount: convert100to5(commentsResponse.AVGAV),
                setSelectedCount: emptyFunc,
                title: intl.formatMessage({ id: "airplane.noise.d", defaultMessage: "Airplane Noise" }),
                image: icon_plane,
              },
              {
                selectedCount: convert100to5(commentsResponse.AVGVO),
                setSelectedCount: emptyFunc,
                title: intl.formatMessage({ id: "neighbour.noise.d", defaultMessage: "Noise from Neighbors" }),
                image: icon_hear,
              },
              {
                selectedCount: convert100to5(commentsResponse.AVGTF),
                setSelectedCount: emptyFunc,
                title: intl.formatMessage({ id: "traffic.noise.d", defaultMessage: "Traffic Noice" }),
                image: icon_car,
              },
              {
                selectedCount: convert100to5(commentsResponse.AVGVE),
                setSelectedCount: emptyFunc,
                title: intl.formatMessage({ id: "greenspaces.d", defaultMessage: "Green spaces" }),
                image: icon_tree,
              },
              {
                selectedCount: convert100to5(commentsResponse.AVGTR),
                setSelectedCount: emptyFunc,
                title: intl.formatMessage({ id: "publictransport.d", defaultMessage: "Public Transport" }),
                image: icon_bus,
              },
              {
                selectedCount: convert100to5(commentsResponse.AVGCO),
                setSelectedCount: emptyFunc,
                title: intl.formatMessage({ id: "Commerces.d", defaultMessage: "Commerces" }),
                image: icon_cup,
              },
            ].map((data, i) => {
              return (
                <div key={i} className="ratings-row">
                  <LabeledRatings {...data} showDecimals={true} />
                </div>
              );
            })}
          </div>
          <div className="all-ratings__counter">
            <div>
              <FormattedMessage defaultMessage="Total Votes" id="totalvotes.d" />
            </div>
            <span>
              {dataRow[10]} {isSingularVote ? "Vote" : "Votes"}
            </span>
          </div>
        </div>
      </div>

      <div className="row-details-comments">
        <div className="row-details-comments__heading">
          <FormattedMessage defaultMessage="Comments" id="comments.d" /> ({commentsResponse.Comments.length})
        </div>
        {(!showAll ? commentsResponse.Comments.slice(0, 3) : commentsResponse.Comments).map((comment) => {
          return (
            <div className="row-details-comments__body">
              <div className="person-name">{comment.Alias}</div>
              <div className="comment-date">
                {moment(comment.Timestamp).format("MMM DD, YYYY")}
              </div>
              <div className="comment-text">{comment.Comments}</div>
            </div>
          );
        })}
        <div>
          {
            commentsResponse.Comments.length > 3 &&
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "underline", cursor: "pointer" }}>
              <span onClick={() => setShowAll(!showAll)}>
              {
                showAll ?
                <FormattedMessage id="comments.showless" defaultMessage="Show Less" />
                : <FormattedMessage id="comments.showall" defaultMessage="Show All" />
              }
              </span>
            </div>
          }
        </div>
        <div className="row-details-footer">
          <Button 
            onClick={onClose} 
            text={intl.formatMessage({ defaultMessage: "Close", id: "comments.close" })} 
            variant="primary" 
          />
        </div>
      </div>
    </div>
  );
};

export default RowDetailsModal;
