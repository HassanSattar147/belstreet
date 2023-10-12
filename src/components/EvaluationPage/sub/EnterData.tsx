import { useState } from "react";
import DropDownMenu, { LV } from "../../Elements/DropDownMenu";
import Input from "../../Elements/Input";

const EnterData = () => {
  const [municipalityLV, setMunicipalityLV] = useState<LV>();
  return (
    <div>
      <h4>Start to enter your data</h4>
      <div className="enter-data-row">
        <label className="enter-data-col-1">Municipality</label>
        <div className="enter-data-col-2">
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
      </div>
      <div className="input_data">
        <label className="input_label">Street</label>
        <Input placeholder="Choose Your Street" />
      </div>
      <div className="input_data">
        <label className="input_label">Number (optional):</label>
        <Input placeholder="Choose Your Number (optional)" />
      </div>
    </div>
  );
};

export default EnterData;
