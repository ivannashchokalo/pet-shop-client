import { components, OptionProps } from "react-select";
import { SelectOption } from "@/types/selectOptions";
import Icon from "../Icon/Icon";

export default function Option(props: OptionProps<SelectOption>) {
  return (
    <components.Option {...props}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {props.label}

        {props.isSelected && (
          <Icon
            name="check"
            className="fill-[#aad2f2] "
            width={16}
            height={16}
          />
        )}
      </div>
    </components.Option>
  );
}
