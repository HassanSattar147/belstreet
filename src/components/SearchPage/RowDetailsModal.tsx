// import React from "react";
import icon_plane from "../../../public/assets/common/icon-plane.svg";
import icon_hear from "../../../public/assets/common/icon-hear.svg";
import icon_car from "../../../public/assets/common/icon-car.svg";
import LabeledRatings from "../Elements/LabeledRatings";
import Button from "../Elements/Button";

const RowDetailsModal = ({onClose}:{
  onClose: () => void
}) => {
  const headingTitle = "Grand Place 0";

  const emptyFunc = () => {};

  const all_data = [
    {
      selectedCount: 1,
      setSelectedCount: emptyFunc,
      title: "Airplane Noise",
      image: icon_plane,
    },
    {
      selectedCount: 5,
      setSelectedCount: emptyFunc,
      title: "Noise from Neighbors",
      image: icon_hear,
    },
    {
      selectedCount: 3,
      setSelectedCount: emptyFunc,
      title: "Traffic noise",
      image: icon_car,
    },
  ];

  const tempDupData = [...all_data];
  const tempName = "Abarvets";
  const tempDate = "Mar 17th, 2023";
  const lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
  const tempComment = `${lorem} ${lorem}`;

  return (
    <div className="row-details-modal-wrapper">
      <div className="row-details-heading">{headingTitle}</div>

      <div className="row-details-body">
        <div className="row-details-body__pie-chart">73%</div>
        <div className="row-details-body__ratings">
          <div className="all-ratings">
            {tempDupData.map((data, i) => {
              return (
                <div key={i} className="ratings-row">
                  <LabeledRatings {...data} />
                </div>
              );
            })}
          </div>
          <div className="all-ratings__counter">
            <div>Total Votes</div>
            <span>{tempDupData.length} Votes</span>
          </div>
        </div>
      </div>

      <div className="row-details-comments">
        <div className="row-details-comments__heading">Comments</div>
        <div className="row-details-comments__body">
          <div className="person-name">{tempName}</div>
          <div className="comment-date">{tempDate}</div>
          <div className="comment-text">{tempComment}</div>
        </div>
        <div className="row-details-footer">
          <Button onClick={onClose} text="Close" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default RowDetailsModal;
