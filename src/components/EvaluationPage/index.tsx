import Nav from "../Nav";
import "../../styles/pageTwo.css";
import EnterData from "./sub/EnterData";
import DifficultyCriteria from "./sub/DifficultyCriteria";
import HappinessCriteria from "./sub/HappinessCriteria";
import Comment from "./sub/Comment";
import Button from "../Elements/Button";

const PageTwo = ({
  setIsSearchPage,
}: {
  setIsSearchPage: (x: boolean | undefined) => void;
}) => {
  return (
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
                By clicking here, I accept the <a href="#">terms</a> of use and{" "}
                <a href="#">privacy policy</a>.
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
  );
};

export default PageTwo;
