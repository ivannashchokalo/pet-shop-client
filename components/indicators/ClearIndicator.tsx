import { components, ClearIndicatorProps } from "react-select";
import Icon from "../Icon/Icon";
import { SelectOption } from "@/types/selectOptions";

export default function ClearIndicator(
  props: ClearIndicatorProps<SelectOption, boolean>,
) {
  return (
    <components.ClearIndicator {...props}>
      <Icon name="cross" className="fill-[#a2a2a2]" width={16} height={16} />
    </components.ClearIndicator>
  );
}
