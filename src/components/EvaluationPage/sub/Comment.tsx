import { FC } from "react";
import Input from "../../Elements/Input";
import { FormattedMessage, useIntl } from "react-intl";

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

  const intl = useIntl();

  return (
    <div className="data_entry">
      <h4>
        <FormattedMessage
         defaultMessage="A comment helps other users to know the street."
         id="comment.label"
        />
      </h4>
      <div className="input_data">
        <label className="input_label">
          <FormattedMessage defaultMessage="Your alias (optional): " id="comment.alias" />
        </label>
        <Input
          placeholder={intl.formatMessage({ defaultMessage: "Choose an alias (optional)", id: "choose.an.alias" })}
          value={optionalAlias}
          valueSetter={setOptionalAlias}
        />
      </div>
      <div className="input_data">
        <label className="input_label">
          <FormattedMessage defaultMessage={"Comments (optional): "} id="comment.message" />
        </label>
        <Input
          placeholder={intl.formatMessage({ defaultMessage: "Enter your comments (optional)", id: "comment.message_placeholder"})}
          value={optionalComments}
          valueSetter={setOptionalComments}
        />
      </div>
    </div>
  );
};

export default Comment;
