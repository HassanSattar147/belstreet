import "./App.css";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";

function App() {
  return (
    <div>
      {!false && <PageTwo />}
      {false && <PageThree />}
    </div>
  );
}

export default App;
