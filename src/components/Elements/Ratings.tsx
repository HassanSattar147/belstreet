import StarIcon from "./StarIcon";
import "../../styles/elements.css";
import { FormattedMessage } from "react-intl";

export interface RatingsProps {
  selectedCount: number;
  setSelectedCount: (x: number) => void;
  totalStars?: number;
  showDecimals: boolean;
}
const Ratings: React.FC<RatingsProps> = ({
  selectedCount,
  setSelectedCount,
  totalStars = 5,
  showDecimals
}) => {
  return (
    <div className="ratings">
      <div className="ratings-stars">
        {new Array(totalStars).fill("").map((_, i) => {
          const currentNumber = i + 1;
          return (
            <div
              onClick={() => {
                setSelectedCount(currentNumber);
              }}
              className="ratings-stars__star"
            >
              <StarIcon
                color={currentNumber <= selectedCount ? "YELLOW" : "GRAY"}
              />
            </div>
          );
        })}
      </div>
      <div className="ratings-count">{selectedCount.toFixed(showDecimals ? 2 : 0)} <FormattedMessage id="stars" defaultMessage="Stars" /></div>
    </div>
  );
};

export default Ratings;
