import React from "react";
import Ratings from "./Ratings";
import { RatingsProps } from "./Ratings";

interface Props extends RatingsProps {
  title: string;
  image?: string;
  ratingsContainerWidth?: string;
}

const LabeledRatings: React.FC<Props> = ({
  title,
  image,
  selectedCount,
  setSelectedCount,
  totalStars,
}) => {
  return (
    <div className="labeled-ratings__wrapper">
      <div className="ratings-label">
        <div className="ratings-label__title">{title}</div>
        {image && <img src={image} className="ratings-label__image" />}
      </div>
      <div className="ratings-ratings">
        <Ratings
          selectedCount={selectedCount}
          setSelectedCount={setSelectedCount}
          totalStars={totalStars}
        />
      </div>
    </div>
  );
};

export default LabeledRatings;
