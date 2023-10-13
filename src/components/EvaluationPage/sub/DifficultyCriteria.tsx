import React from "react";
import LabeledRatings from "../../Elements/LabeledRatings";
import icon_plane from "../../../../public/assets/common/icon-plane.svg";
import icon_hear from "../../../../public/assets/common/icon-hear.svg";
import icon_car from "../../../../public/assets/common/icon-car.svg";
import { FormattedMessage, useIntl } from "react-intl";

interface Props {
  planeNR: number;
  neighborNR: number;
  trafficNR: number;
  setPlaneNR: (x: number) => void;
  setNeighborNR: (x: number) => void;
  setTrafficNR: (x: number) => void;
}

const DifficultyCriteria: React.FC<Props> = ({
  planeNR,
  neighborNR,
  trafficNR,
  setPlaneNR,
  setNeighborNR,
  setTrafficNR,
}) => {

  const intl = useIntl();

  // NR means Noise Rating

  const all_data = [
    {
      selectedCount: planeNR,
      setSelectedCount: setPlaneNR,
      title: intl.formatMessage({ id: "difficulty.airplane", defaultMessage: "Airplane Noise" }),
      image: icon_plane,
    },
    {
      selectedCount: neighborNR,
      setSelectedCount: setNeighborNR,
      title: intl.formatMessage({ id: "difficulty.neighbour",defaultMessage: "Noise from Neighbors" }),
      image: icon_hear,
    },
    {
      selectedCount: trafficNR,
      setSelectedCount: setTrafficNR,
      title: intl.formatMessage({ id: "difficulty.noise", defaultMessage: "Traffic noise" }),
      image: icon_car,
    },
  ];

  return (
    <div>
      <h4>
        <FormattedMessage
          defaultMessage="Then evaluate these criteria that make our lives more difficult."
          id="difficulty.label"
        />
      </h4>

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
