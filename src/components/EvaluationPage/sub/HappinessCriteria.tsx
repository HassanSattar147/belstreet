import React from "react";
import LabeledRatings from "../../Elements/LabeledRatings";
import icon_tree from "../../../../public/assets/common/icon-tree.svg";
import icon_bus from "../../../../public/assets/common/icon-bus.svg";
import icon_cup from "../../../../public/assets/common/icon-cup.svg";
import { FormattedMessage, useIntl } from "react-intl";

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

  const intl = useIntl();

  const all_data = [
    {
      selectedCount: greenSpaceNR,
      setSelectedCount: setGreenSpaceNR,
      title: intl.formatMessage({ id: "happiness.green_spaces", defaultMessage: "Green spaces", }),
      image: icon_tree,
    },
    {
      selectedCount: transportNR,
      setSelectedCount: setTransportNR,
      title: intl.formatMessage({ id: "happiness.public_transport", defaultMessage:  "Transport public" }),
      image: icon_bus,
    },
    {
      selectedCount: commercesNR,
      setSelectedCount: setCommercesNR,
      title:intl.formatMessage({ id: "happiness.commerces", defaultMessage:  "Commerces" }),
      image: icon_cup,
    },
  ];

  return (
    <div>
      <h4>
        <FormattedMessage id="form.happiness" defaultMessage="Continue with the criteria that brings the neighborhood to life." />
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

export default HappinessCriteria;
