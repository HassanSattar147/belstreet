import React, { useEffect } from "react";
import Nav from "../Nav";
import "../../styles/pageTwo.css";
import EnterData from "./sub/EnterData";
import DifficultyCriteria from "./sub/DifficultyCriteria";
import HappinessCriteria from "./sub/HappinessCriteria";
import Comment from "./sub/Comment";
import Button from "../Elements/Button";
import Modal from "../Elements/Modal";
import attentionIcon from "../../../public/assets/common/attention-icon.svg";
import successIcon from "../../../public/assets/common/success-icon.svg";
import { Link } from "react-router-dom";
import { LV } from "../Elements/DropDownMenu";
import { request } from "../../utils/request";
import useDebounce from "../../utils/useDebounce";

interface AutofillSuggestion {
  streetname_fr: string;
}

const PageTwo = () => {
  // Modal states
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  // Data states
  const [municipalityLV, setMunicipalityLV] = React.useState<LV>();
  const [street, setStreet] = React.useState("");
  const debouncedStreet = useDebounce(street, 1000);
  const [optionalNumber, setOptionalNumber] = React.useState("");
  const [optionalAlias, setOptionalAlias] = React.useState("");
  const [optionalComments, setOptionalComments] = React.useState("");

  // NR means Noise Ratio
  const [planeNR, setPlaneNR] = React.useState(0);
  const [neighborNR, setNeighborNR] = React.useState(0);
  const [trafficNR, setTrafficNR] = React.useState(0);
  const [greenSpaceNR, setGreenSpaceNR] = React.useState(0);
  const [transportNR, setTransportNR] = React.useState(0);
  const [commercesNR, setCommercesNR] = React.useState(0);

  // can submit
  const [cantSubmit, setCantSubmit] = React.useState(true);

  // API call reponse
  const [autofillRes, setAutofillRes] = React.useState<AutofillSuggestion[]>(
    []
  );

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

  useEffect(() => {
    request("/IP.php", {}).then((d) => setCantSubmit(!d.success));
  }, []);

  useEffect(() => {
    if (!debouncedStreet) return;
    fetchAutofillData((municipalityLV?.value || "") as string, debouncedStreet);
  }, [debouncedStreet]);

  useEffect(() => {
    console.log("{{{autofillRes}}}", autofillRes);
  }, [autofillRes]);

  const isSubmitable = async () => {
    const d = await request("/IP.php", {});
    setCantSubmit(!d.success);
    const isMunicipalitySelected = typeof municipalityLV !== "undefined";
    const isStreetEntered = street.length > 0;
    const isPlaneNREntered = planeNR > 0;
    const isNeighborNREntered = neighborNR > 0;
    const isTrafficNREntered = trafficNR > 0;
    const isGreenSpaceNR = greenSpaceNR > 0;
    const isTransportNR = transportNR > 0;
    const isCommercesNR = commercesNR > 0;

    return (
      isMunicipalitySelected &&
      isStreetEntered &&
      isPlaneNREntered &&
      isNeighborNREntered &&
      isTrafficNREntered &&
      isGreenSpaceNR &&
      isTransportNR &&
      isCommercesNR
    );
  };

  return (
    <>
      <div className="page-two">
        <Nav />

        <div className="page-two-content">
          <div className="page-two-content__header">
            <h2 className="color-primary">
              Rate your street so that it can help other users.
            </h2>
            <p>
              Follow the following steps to evaluate your street and number. No
              need to register and 100% anonymous.
            </p>
            <p>
              Remember, you can always leave the “number” case blank. In this
              case, you are evaluating the street and not a particular number.
            </p>
          </div>

          <div className="page-two-content__body">
            <EnterData
              municipalityLV={municipalityLV}
              setMunicipalityLV={setMunicipalityLV}
              street={street}
              setStreet={setStreet}
              optionalNumber={optionalNumber}
              setOptionalNumber={setOptionalNumber}
            />
            <DifficultyCriteria
              planeNR={planeNR}
              neighborNR={neighborNR}
              trafficNR={trafficNR}
              setPlaneNR={setPlaneNR}
              setNeighborNR={setNeighborNR}
              setTrafficNR={setTrafficNR}
            />
            <HappinessCriteria
              greenSpaceNR={greenSpaceNR}
              transportNR={transportNR}
              commercesNR={commercesNR}
              setGreenSpaceNR={setGreenSpaceNR}
              setTransportNR={setTransportNR}
              setCommercesNR={setCommercesNR}
            />
            <Comment
              optionalAlias={optionalAlias}
              setOptionalAlias={setOptionalAlias}
              optionalComments={optionalComments}
              setOptionalComments={setOptionalComments}
            />
          </div>

          <div className="page-two-content__footer">
            <div className="tou-check">
              <div className="tou-check__check">
                <input type="checkbox" />
                <p>
                  By clicking here, I accept the <a href="#">terms</a> of use
                  and <a href="#">privacy policy</a>.
                </p>
              </div>
              <Button
                text="Send"
                variant="primary"
                onClick={() => {
                  if (!isSubmitable()) {
                    return alert("Please enter all the details. Thanks!");
                  }
                  setShowSuccessModal(true);
                }}
              />
            </div>
            <div className="button-back-to-home-container">
              <Link to={"/"}>
                <Button
                  text="Back to home"
                  variant="secondary"
                  onClick={() => {}}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={cantSubmit || showSuccessModal}
        onClose={() => {
          // This method will not execute becuase of
          // isCloseable={false}. You can check the
          // Modal.tsx for further details.
          setCantSubmit(false);
          setShowSuccessModal(false);
        }}
        isCloseable={false}
        hideCloseBtn
      >
        {!cantSubmit && !showSuccessModal ? null : (
          <div className="review-modal">
            <img src={cantSubmit ? attentionIcon : successIcon} alt="" />
            <h3>{cantSubmit ? "Attention" : "Thank You!"}</h3>
            <p>
              {cantSubmit
                ? "You have already submitted a Review. You can submit another review after 48 Hours."
                : "Your review has been submitted, You can submit another review after 48 hours.  "}
            </p>
            <div className="review-modal__footer">
              <Link to={"/"}>
                <Button
                  onClick={() => {}}
                  text="Back To Home"
                  variant="secondary"
                  style={{ backgroundColor: "#fff" }}
                />
              </Link>
              {cantSubmit && (
                <Button
                  onClick={() => {
                    setCantSubmit(false);
                    setShowSuccessModal(false);
                  }}
                  text="Back To Review"
                  variant="primary"
                />
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default PageTwo;
