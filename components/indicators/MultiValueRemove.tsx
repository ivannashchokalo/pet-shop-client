import { components, MultiValueRemoveProps } from "react-select";
import { SelectOption } from "@/types/selectOptions";
import Icon from "../Icon/Icon";

export default function MultiValueRemove(
  props: MultiValueRemoveProps<SelectOption>,
) {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name="cross" className="fill-[#a2a2a2]" width={14} height={14} />
    </components.MultiValueRemove>
  );
}
