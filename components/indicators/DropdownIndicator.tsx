import { components } from "react-select";
import type { DropdownIndicatorProps } from "react-select";
import Icon from "../Icon/Icon";
import clsx from "clsx";
import { SelectOption } from "@/types/selectOptions";

export default function DropdownIndicator(
  props: DropdownIndicatorProps<SelectOption, boolean>,
) {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <Icon
        name="arrow"
        className={clsx(
          "fill-none stroke-[#323f50] stroke-1 transition-transform duration-300",
          menuIsOpen && "rotate-180",
        )}
      />
    </components.DropdownIndicator>
  );
}
