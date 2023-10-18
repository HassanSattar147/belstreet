import React from "react";
import Input from "./Input";
import { InputProps } from "./Input";
import useClickOutside from "./useClickOutside";
import { useIntl } from "react-intl";

interface Props {
  inputProps: InputProps;
  containerClass?: string;
  options: string[];
  selected: string;
  setSelected: (x: string) => void;
}

const Autofill: React.FC<Props> = ({
  inputProps,
  containerClass,
  options,
  selected,
  setSelected,
}) => {
  const intl = useIntl();
  const [isExpanded, setIsExpanded] = React.useState(!false);
  const handleCloseDD = () => {
    setIsExpanded(false);
  };

  const shouldDDExpand = React.useMemo(() => {
    return options.length > 0 && (inputProps.value?.length || 0) > 0;
  }, [options, inputProps.value]);

  React.useEffect(() => {
    setIsExpanded(shouldDDExpand);
  }, [shouldDDExpand]);

  const autoFillRef = useClickOutside(handleCloseDD);

  return (
    <div ref={autoFillRef} className={"auto-fill " + (containerClass || "")}>
      <Input
        {...inputProps}
        placeholder={selected ? 
          intl.formatMessage({ defaultMessage: "Choose Your Street", id: "choose.your.street" }) : 
          intl.formatMessage({ defaultMessage: "Choose Your Street", id: "choose.your.street" })
        }
        onFocus={() => {
          if (shouldDDExpand) setIsExpanded(true);
        }}
      />
      {isExpanded && (
        <div className="auto-fill__dd">
          {options.map((option, i) => {
            const isSelected = selected === option;
            return (
              <div
                style={{
                  backgroundColor: isSelected ? "#0003" : "",
                  color: isSelected ? "#000" : "",
                }}
                key={i}
                className="auto-fill__dd__item"
                onClick={() => {
                  setSelected(option);
                  inputProps.valueSetter?.(option);
                  setTimeout(() => {
                    handleCloseDD();
                  }, 100);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Autofill;
