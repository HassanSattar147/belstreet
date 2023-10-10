import React from "react";
import LabeledRatings from "../../Elements/LabeledRatings";
import icon_plane from "../../../../public/assets/common/icon-plane.svg";
import icon_hear from "../../../../public/assets/common/icon-hear.svg";
import icon_car from "../../../../public/assets/common/icon-car.svg";

const DifficultyCriteria = () => {
  // NR means Noise Rating

  const [planeNR, setPlaneNR] = React.useState(0);
  const [neighborNR, setNeighborNR] = React.useState(0);
  const [trafficNR, setTrafficNR] = React.useState(0);

  const all_data = [
    {
      selectedCount: planeNR,
      setSelectedCount: setPlaneNR,
      title: "Airplane Noise",
      image: icon_plane,
    },
    {
      selectedCount: neighborNR,
      setSelectedCount: setNeighborNR,
      title: "Noise from Neighbors",
      image: icon_hear,
    },
    {
      selectedCount: trafficNR,
      setSelectedCount: setTrafficNR,
      title: "Traffic noise",
      image: icon_car,
    },
  ];

  return (
    <div>
      <h4>Then evaluate these criteria that make our lives more difficult.</h4>

      {all_data.map((data, i) => {
        return (
          <div key={i} className="ratings-row">
            <LabeledRatings {...data} />
          </div>
        );
      })}
    </div>
  );
};

export default DifficultyCriteria;
