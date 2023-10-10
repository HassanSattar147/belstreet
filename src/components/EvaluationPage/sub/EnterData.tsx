import { useState } from "react";
import DropDownMenu, { LV } from "../../Elements/DropDownMenu";
import Input from "../../Elements/Input";

const EnterData = () => {
  const [municipalityLV, setMunicipalityLV] = useState<LV>();
  return (
    <div>
      <h4>Start to enter your data</h4>
      <div className="input_data">
        <label className="input_label">Municipality </label>
        <div className="flex-3">
          <DropDownMenu
            options={[
              { value: "id1", label: "id1: Hello world" },
              { value: "id2", label: "id2: khello" },
              { value: "id3", label: "id3: world" },
              { value: "id4", label: "id4: world Khello" },
              { value: "id5", label: "id5: bye" },
            ]}
            selectedLV={municipalityLV}
            setSelectedLV={setMunicipalityLV}
          />
        </div>
      </div>
      <div className="input_data">
        <label className="input_label">Street </label>
        <Input placeholder="Choose Your Street" />
      </div>
      <div className="input_data">
        <label className="input_label">Number (optional): </label>
        <Input placeholder="Choose Your Number (optional)" />
      </div>
    </div>
  );
};

export default EnterData;
