import React from "react";
import Autofill from "../../Elements/Autofill";
import useDebounce from "../../../utils/useDebounce";

interface AutofillSuggestion {
  streetname_fr: string;
}

interface Props {
  municipality: string;
  street: string;
  setStreet: (x: string) => void;
  selectedStreet: string;
  setSelectedStreet: (x: string) => void;
}

const StreetAutoSuggest: React.FC<Props> = ({
  municipality,
  street,
  setStreet,
}) => {
  const debouncedStreet = useDebounce(street, 500);

  // API call reponse
  const [autofillRes, setAutofillRes] = React.useState<AutofillSuggestion[]>(
    []
  );

  // states
  const [selectedStreet, setSelectedStreet] = React.useState("");

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

    const res = await fetch("http://localhost:3030/Autofill.php", {
      body: formData,
      method: "POST",
      mode: "cors",
    });

    const data = await res.json();

    setAutofillRes(data);
  };

  React.useEffect(() => {
    if (debouncedStreet.length === 0 || municipality.length === 0) return;
    fetchAutofillData(municipality, debouncedStreet);
  }, [debouncedStreet, municipality]);

  return (
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
  );
};

export default StreetAutoSuggest;
