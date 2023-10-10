// import React from 'react'
import Button from "../Elements/Button";
import Nav from "../Nav";

const Homepage = ({
  setIsSearchPage,
}: {
  setIsSearchPage: (x: boolean | undefined) => void;
}) => {
  return (
    <div>
      <Nav />
      <Button
        onClick={() => {
          setIsSearchPage(true);
        }}
        text="Search Page"
        variant="primary"
      />
      <Button
        onClick={() => {
          setIsSearchPage(false);
        }}
        text="Evaluation Page"
        variant="secondary"
      />
    </div>
  );
};

export default Homepage;
