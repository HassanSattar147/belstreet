import { FC, useState, useEffect } from "react";
import DropDownMenu, { LV } from "../../Elements/DropDownMenu";
import Input from "../../Elements/Input";
import { municipalityOptions } from "../../SearchPage";
import Autofill from "../../Elements/Autofill";
import useDebounce from "../../../utils/useDebounce";
import { api } from "../../../utils/request";

interface AutofillSuggestion {
  streetname_fr: string;
}

interface Props {
  municipalityLV: LV | undefined;
  setMunicipalityLV: (x: LV | undefined) => void;
  street: string;
  setStreet: (x: string) => void;
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
}) => {
  const debouncedStreet = useDebounce(street, 1000);

  // API call reponse
  const [autofillRes, setAutofillRes] = useState<AutofillSuggestion[]>([]);

  // states
  const [selectedStreet, setSelectedStreet] = useState("");

  const fetchAutofillData = async (
    municipalityValue: string,
    streetStr: string
  ) => {
    const formData = new FormData();
    formData.append("action", "submit");
    formData.append(
      "token",
      "03AFcWeA4itAVmIMsZdzrU1Bk4Jd5fRcJk65yom3il939jzjP7NXr0x-t9Y7EezGtuUGZvk5cc7XGuRym18tF9HaB7TkqlcnG-CIt9HPpFIGZb0sckTj-BlQvWcerzgkPoeXPOlcGCv-6aVEtaEFcUtUcoBdZdIsnSqVmvAvKAqs0UzJoWI_uS0HH8Erp72xJ5pFDglGZPAmf8Imkn8u53AgTQYV56g47aTCpeQlVy_MqIH-TLFVROcmFihlocbAXPddbyqsd7gZp2BiqbweiD_7pnwgrmhaLch_shOUrVl7X7jT1kz3tZdseghEmH9tmco7pMzxKyH_V-d-sPX5AVqnG6TcFW0U1m7bZS_v0RmKh_fZfzEMXaGahdY0JsMSL2Abk0kqKEVLbMRdkEBYnQQBv4iiPGSDBi9kJPvjvSjXJhhUvV4VvcWDGUQPwCU0mbPWTXj-FwqxS62ga_BWHA0v0SJlrfVEcYv44GQJ70rInuKwdoLaZuvsfyiDCBtTcP7tfBEAXMGXW-lh1P1LW8K1mRLxDIjIKhu6-ZH2qtNGw3HeFFmC-JWyPUETHZkDXAs2rc29o3oJ1qM1jutQKtR-eWUTz6sbmrRaaNDt_shNvxaylSj6adkAA"
    );
    formData.append("commune", municipalityValue); //should change depending on the value selected by user. (Municiplity dropdown)
    formData.append("rue", streetStr); // Search parameter
    // You can add more form fields here as needed.

    const res = await fetch(`${api}/Autofill.php`, {
      body: formData,
      method: "POST",
      mode: "cors",
    });

    const data = await res.json();

    setAutofillRes(data);
  };

  useEffect(() => {
    if (debouncedStreet.length === 0) return;
    fetchAutofillData((municipalityLV?.value || "") as string, debouncedStreet);
    console.log("Making API call for autofill data");
  }, [debouncedStreet]);

  useEffect(() => {
    console.log("{{{autofillRes}}}", autofillRes);
  }, [autofillRes]);

  return (
    <div>
      <h4>Start to enter your data</h4>
      <div className="enter-data-row">
        <label className="enter-data-col-1">Municipality</label>
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
        <label className="enter-data-col-1">Street</label>
        <div className="enter-data-col-2">
          <Autofill
            inputProps={{
              placeholder: "Choose Your Street",
              value: street,
              valueSetter: setStreet,
            }}
            options={autofillRes.map((e) => e.streetname_fr)}
            selected={selectedStreet}
            setSelected={setSelectedStreet}
          />
        </div>
      </div>
      <div className="input_data">
        <label className="input_label">Number (optional):</label>
        <Input
          placeholder="Choose Your Number (optional)"
          value={optionalNumber}
          valueSetter={setOptionalNumber}
        />
      </div>
    </div>
  );
};

export default EnterData;
