import { SelectOption } from "@/types/selectOptions";
import { components, MultiValueProps } from "react-select";

export default function MultiValue(props: MultiValueProps<SelectOption>) {
  const index = props.index;
  const values = props.getValue();

  if (index > 0) return null;

  if (index === 0 && values.length > 1) {
    return (
      <>
        <components.MultiValue {...props} />
        <span className="ml-2 text-[#7793B7]">+{values.length - 1}</span>
      </>
    );
  }

  return <components.MultiValue {...props} />;
}
