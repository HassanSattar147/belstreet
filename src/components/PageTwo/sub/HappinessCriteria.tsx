import React from "react";
import LabeledRatings from "../../Elements/LabeledRatings";
import icon_tree from "../../../../public/assets/common/icon-tree.svg";
import icon_bus from "../../../../public/assets/common/icon-bus.svg";
import icon_cup from "../../../../public/assets/common/icon-cup.svg";

const HappinessCriteria = () => {
  // NR means Noise Rating

  const [greenSpaceNR, setGreenSpaceNR] = React.useState(0);
  const [transportNR, setTransportNR] = React.useState(0);
  const [commercesNR, setCommercesNR] = React.useState(0);

  const all_data = [
    {
      selectedCount: greenSpaceNR,
      setSelectedCount: setGreenSpaceNR,
      title: "Green spaces",
      image: icon_tree,
    },
    {
      selectedCount: transportNR,
      setSelectedCount: setTransportNR,
      title: "Transport public",
      image: icon_bus,
    },
    {
      selectedCount: commercesNR,
      setSelectedCount: setCommercesNR,
      title: "Commerces",
      image: icon_cup,
    },
  ];

  return (
    <div>
      <h4>Continue with the criteria that brings the neighborhood to life.</h4>

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

export default HappinessCriteria;
