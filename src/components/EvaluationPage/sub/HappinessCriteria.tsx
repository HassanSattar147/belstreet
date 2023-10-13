import React from "react";
import LabeledRatings from "../../Elements/LabeledRatings";
import icon_tree from "../../../../public/assets/common/icon-tree.svg";
import icon_bus from "../../../../public/assets/common/icon-bus.svg";
import icon_cup from "../../../../public/assets/common/icon-cup.svg";

interface Props {
  greenSpaceNR: number;
  transportNR: number;
  commercesNR: number;
  setGreenSpaceNR: (x: number) => void;
  setTransportNR: (x: number) => void;
  setCommercesNR: (x: number) => void;
}

const HappinessCriteria: React.FC<Props> = ({
  greenSpaceNR,
  transportNR,
  commercesNR,
  setGreenSpaceNR,
  setTransportNR,
  setCommercesNR,
}) => {
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
