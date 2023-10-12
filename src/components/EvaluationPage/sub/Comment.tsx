import { FC } from "react";
import Input from "../../Elements/Input";

interface Props {
  optionalAlias: string;
  setOptionalAlias: (x: string) => void;
  optionalComments: string;
  setOptionalComments: (x: string) => void;
}

const Comment: FC<Props> = ({
  optionalAlias,
  setOptionalAlias,
  optionalComments,
  setOptionalComments,
}) => {
  return (
    <div className="data_entry">
      <h4>A comment helps other users to know the street.</h4>
      <div className="input_data">
        <label className="input_label">Your alias (optional): </label>
        <Input
          placeholder="Choose an alias (optional)"
          value={optionalAlias}
          valueSetter={setOptionalAlias}
        />
      </div>
      <div className="input_data">
        <label className="input_label">Comments (optional): </label>
        <Input
          placeholder="Enter your comments (optional)"
          value={optionalComments}
          valueSetter={setOptionalComments}
        />
      </div>
    </div>
  );
};

export default Comment;
