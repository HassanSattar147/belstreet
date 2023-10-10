import React from "react";
import "./App.css";
import EvaluationPage from "./components/EvaluationPage";
import SearchPage from "./components/SearchPage";
import Homepage from "./components/Homepage";

function App() {
  const [isSearchPage, setIsSearchPage] = React.useState<boolean | undefined>();

  /* 
    NOTES:
      isSearchPage -> undefined -> homepage
      isSearchPage -> true      -> Search Page
      isSearchPage -> false     -> Evaluation Page
  */

  return (
    <div>
      {typeof isSearchPage === "undefined" ? (
        <Homepage setIsSearchPage={setIsSearchPage} />
      ) : isSearchPage ? (
        <SearchPage setIsSearchPage={setIsSearchPage} />
      ) : (
        <EvaluationPage setIsSearchPage={setIsSearchPage} />
      )}
    </div>
  );
}

export default App;
