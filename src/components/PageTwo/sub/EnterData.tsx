import Input from "../../Elements/Input";
// import Buttons from "../../Elements/Buttons";

const EnterData = () => {
  return (
    <div>
      <h4>Start to enter your data</h4>
      <div className="input_data">
        <label className="input_label">Municipality </label>
        <Input placeholder="Choose Your Municipality" />
      </div>
      <div className="input_data">
        <label className="input_label">Street </label>
        <Input placeholder="Choose Your Street" />
      </div>
      <div className="input_data">
        <label className="input_label">Number (optional): </label>
        <Input placeholder="Choose Your Number (optional)" />
      </div>
      {/* <Buttons /> */}
    </div>
  );
};

export default EnterData;
