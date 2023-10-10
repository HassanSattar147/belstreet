import Input from "../../Elements/Input";

const Comment = () => {
  return (
    <div className="data_entry">
      <h4>A comment helps other users to know the street.</h4>
      <div className="input_data">
        <label className="input_label">Your alias (optional): </label>
        <Input placeholder="Choose an alias (optional)" />
      </div>
      <div className="input_data">
        <label className="input_label">Comments (optional): </label>
        <Input placeholder="Enter your comments (optional)" />
      </div>
    </div>
  );
};

export default Comment;
