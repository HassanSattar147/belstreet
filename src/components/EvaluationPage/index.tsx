import React from "react";
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

const PageTwo = ({
  setIsSearchPage,
}: {
  setIsSearchPage: (x: boolean | undefined) => void;
}) => {
  const [showAttentionModal, setShowAttentionModal] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

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
            <EnterData />
            <DifficultyCriteria />
            <HappinessCriteria />
            <Comment />
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
              <Button text="Send" variant="primary" onClick={() => {}} />
            </div>
            <div className="button-back-to-home-container">
              <Button
                text="Back to home"
                variant="secondary"
                onClick={() => {
                  setIsSearchPage(undefined);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showAttentionModal || showSuccessModal}
        onClose={() => {
          // This method will not execute becuase of
          // isCloseable={false}. You can check the
          // Modal.tsx for further details.
          setShowAttentionModal(false);
          setShowSuccessModal(false);
        }}
        isCloseable={false}
        hideCloseBtn
      >
        {!showAttentionModal && !showSuccessModal ? null : (
          <div className="review-modal">
            <img
              src={showAttentionModal ? attentionIcon : successIcon}
              alt=""
            />
            <h3>{showAttentionModal ? "Attention" : "Thank You!"}</h3>
            <p>
              {showAttentionModal
                ? "You have already submitted a Review. You can submit another review after 48 Hours."
                : "Your review has been submitted, You can submit another review after 48 hours.  "}
            </p>
            <div className="review-modal__footer">
              <Button
                onClick={() => {
                  setIsSearchPage(undefined);
                }}
                text="Back To Home"
                variant="secondary"
                style={{ backgroundColor: "#fff" }}
              />
              {showAttentionModal && (
                <Button
                  onClick={() => {
                    setShowAttentionModal(false);
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
