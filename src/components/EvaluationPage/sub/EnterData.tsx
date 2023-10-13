import { FC } from "react";
import DropDownMenu, { LV } from "../../Elements/DropDownMenu";
import Input from "../../Elements/Input";
import { municipalityOptions } from "../../SearchPage";
import StreetAutoSuggest from "./StreetAutoSuggest";
import { FormattedMessage, useIntl } from "react-intl";

interface Props {
  municipalityLV: LV | undefined;
  setMunicipalityLV: (x: LV | undefined) => void;
  street: string;
  setStreet: (x: string) => void;
  selectedStreet: string;
  setSelectedStreet: (x: string) => void;
  optionalNumber: string;
  setOptionalNumber: (x: string) => void;
}

const EnterData: FC<Props> = ({
  municipalityLV,
  setMunicipalityLV,
  street,
  setStreet,
  optionalNumber,
  setOptionalNumber,
  selectedStreet,
  setSelectedStreet,
}) => {

  const intl = useIntl();

  return (
    <div>
      <h4><FormattedMessage id="form.label" defaultMessage="Start to enter your data" /></h4>
      <div className="enter-data-row">
        <label className="enter-data-col-1"><FormattedMessage id="form.commune" defaultMessage="Municipality" /></label>
        <div className="enter-data-col-2">
          <DropDownMenu
            options={municipalityOptions}
            selectedLV={municipalityLV}
            setSelectedLV={(newLV) => {
              setMunicipalityLV(newLV);
              setStreet("");
            }}
          />
        </div>
      </div>
      <div className="enter-data-row">
        <label className="enter-data-col-1"><FormattedMessage id="form.rue" defaultMessage="Street" /></label>
        <div className="enter-data-col-2">
          <StreetAutoSuggest
            municipality={(municipalityLV?.value || "") as string}
            street={street}
            setStreet={setStreet}
            selectedStreet={selectedStreet}
            setSelectedStreet={setSelectedStreet}
          />
        </div>
      </div>
      <div className="input_data">
        <label className="input_label">
        <FormattedMessage id="form.street_no" defaultMessage="Number (optional):" />
        </label>
        <Input
          placeholder={intl.formatMessage({ defaultMessage: "Choose Your Number (optional)", id: "form.number.placeholder" })}
          value={optionalNumber}
          valueSetter={setOptionalNumber}
        />
      </div>
    </div>
  );
};

export default EnterData;
