import { components, OptionProps } from "react-select";
import { SelectOption } from "@/types/selectOptions";
import Icon from "../Icon/Icon";

export default function Option(props: OptionProps<SelectOption>) {
  return (
    <components.Option {...props}>
      <div className="flex w-full items-center justify-between">
        {props.label}

        {props.isSelected && (
          <Icon
            name="check"
            className="fill-[#aad2f2]"
            width={16}
            height={16}
          />
        )}
      </div>
    </components.Option>
  );
}
