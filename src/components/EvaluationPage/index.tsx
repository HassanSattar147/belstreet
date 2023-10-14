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
import { api, request } from "../../utils/request";
import toast from "react-hot-toast";
import { FormattedMessage, useIntl } from "react-intl";
import Footer from "../Elements/Footer";

const PageTwo = () => {
  // Modal states
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false);

  const intl = useIntl();

  // Data states
  const [municipalityLV, setMunicipalityLV] = React.useState<LV>();
  const [street, setStreet] = React.useState("");
  const [selectedStreet, setSelectedStreet] = React.useState("");
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

  useEffect(() => {
    request("/IP.php", {}).then((d) => setCantSubmit(!d.success));
  }, []);

  const isSubmitable = async () => {
    if (!acceptTerms) {
      toast.error(
        intl.formatMessage({ defaultMessage: "Accept terms and services to fill the form", id: "accept_terms" })
      );
      return false;
    }
    const d = await request("/IP.php", {});
    setCantSubmit(!d.success);
    if (!d.success) {
      return false;
    }

    const isMunicipalitySelected = typeof municipalityLV !== "undefined";
    const isStreetEntered = true || selectedStreet.length > 0;
    const isPlaneNREntered = planeNR > 0;
    const isNeighborNREntered = neighborNR > 0;
    const isTrafficNREntered = trafficNR > 0;
    const isGreenSpaceNR = greenSpaceNR > 0;
    const isTransportNR = transportNR > 0;
    const isCommercesNR = commercesNR > 0;

    console.log(">>>", {
      isMunicipalitySelected,
      isStreetEntered,
      isPlaneNREntered,
      isNeighborNREntered,
      isTrafficNREntered,
      isGreenSpaceNR,
      isTransportNR,
      isCommercesNR
    });

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

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("action", "submit");
    formData.append("token", "03AFcWeA5_4blp6bkTl8b0e6_a_QKSXHPCf0TCBm6fhCZI1ORlct9zsQWUZQjsneMM_WfivqaRH5xbgmhpiwVGiFbdiownW1WNofk2YEWmYwfPNX2jWP6hoiq7UEbYuXhdes68pJ0J0ap0tcRYs5jsZ7-zY2dw-Z9zNRFozAs7R-HLF-TyOicuUGBrnCyx5ZSyB7OUMeTtu-Hl5mU2MECOEoJpKIYr0ztUSj9V8HxX8rAMDdpeBc4L_ULsuUkyqLT__egY88WwVD12bnzyNbhwvixIqg9InsTbZhzo5yFK-iypcPPca9_TWvxg4wVudLS0u5HptC1ra5E-lKg-CuJLhOeIcdt3OEXyhLzvPQjMPwpdTZiGoY_acWfG2uXg8NJy7QZwtlaz1iQq4K4WahXXUo6d8aLZEtf6bsfMG4L93GskWPbeZstQjTQfEUlVmOjKervhoOSfvOU8wzip9nRPvdSKK84aIGJBIHWw13Uuso7AV2jUIu_VhG97AWHJyLgZ7i62deBUfKpnjNbwQcMNuXeftUIKxlN0gPnr66Q1jZICyyYNJzYiKRzsGryT-VoWOYYiC1sM-n_-1uPiiWKXkS2e8S8VzkXNP02-t63nI0Mx3YqOUoBUaiM")
    formData.append("commune", municipalityLV?.value ? municipalityLV?.value + "" : "");
    formData.append("rue", street);
    formData.append("numero", optionalNumber);
    formData.append("bruit_avion", planeNR + "");
    formData.append("bruit_voisins", neighborNR + "");
    formData.append("bruit_traf", trafficNR + "");
    formData.append("verte", greenSpaceNR + "");
    formData.append("transport", transportNR + "");
    formData.append("commerces", commercesNR + "");
    formData.append("alias", optionalAlias);
    formData.append("message", optionalComments);
    formData.append("termes", '1');

    const request = await fetch(api + "/Index.php", {
      method: "POST",
      headers: {
      //  "Content-Type": "application/",
      },
      body: formData,
    });
    const response = await request.json();
    if (response.message === "Formulaire enregistré correctement.") {
      setShowSuccessModal(true);
    }
    else if (response.message === "Attention! Cette rue et numéro ne correspondent pas.") {
      toast.error(intl.formatMessage({ defaultMessage: "Attention! This street and number do not match.", id: "error.street_no" }))
    }
  }

  return (
    <>
      <div className="page-two">
        <Nav />

        <div className="page-two-content">
          <div className="page-two-content__header">
            <h2 className="color-primary">
            <FormattedMessage defaultMessage="Rate your street so that it can help other users." id="hp.m1"/>
            </h2>
            <p>
            <FormattedMessage defaultMessage="
              Follow the following steps to evaluate your street and number. No
              need to register and 100% anonymous.
              " id="hp.m2"/>
            </p>
            <p>
            <FormattedMessage defaultMessage="
              Remember, you can always leave the “number” case blank. In this
              case, you are evaluating the street and not a particular number.
              " id="hp.m3"/>
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
              selectedStreet={selectedStreet}
              setSelectedStreet={setSelectedStreet}
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
                <input type="checkbox" onChange={(e) => setAcceptTerms(e.target.checked)} />
                <p>
                <FormattedMessage
                  id="hp.tos"
                  defaultMessage="By clicking here, I accept the {terms} and {privacyPolicy}."
                  values={{
                    terms: <a href="/terms">terms of use</a>,
                    privacyPolicy: <a href="/privacy">privacy policy</a>
                  }}
                />
                </p>
              </div>
              <Button
                text="Send"
                variant="primary"
                onClick={async () => {
                  const canSubmit = await isSubmitable();
                  if (!canSubmit) {
                    return toast.error("Required fields are not filled");
                  }
                  handleSubmit();
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
        <div style={{ marginTop: 44, }}>
        <Footer />
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
                ? 
                intl.formatMessage({ id: "error.already_sumbitted", defaultMessage: "You have already submitted a Review. You can submit another review after 48 Hours." }) :
                intl.formatMessage({ id: "success.form", defaultMessage: "Your review has been submitted, You can submit another review after 48 hours.  " })
              }
            </p>
            <div className="review-modal__footer">
              <Link to={"/"}>
                <Button
                  onClick={() => {}}
                  text={ intl.formatMessage({ defaultMessage: "Back To Home", id: "form.backtohome" })}
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
                  text={ intl.formatMessage({ defaultMessage: "Back To Review", id: "form.backtoreview" })}
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
