import { SelectOption } from "@/types/selectOptions";
import type { StylesConfig } from "react-select";

export const selectStyles: StylesConfig<SelectOption> = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "20px",
    borderWidth: "1px",
    borderStyle: "solid",
    padding: "0 10px",
    width: "277px",
    cursor: "pointer",
    boxShadow: "none",
    height: "44px",
    borderColor: state.isFocused ? "#aad2f2" : "#a2a2a2",

    "&:hover": {
      borderColor: "#aad2f2",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#a2a2a2",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "1.5",
    margin: 0,
  }),

  singleValue: (provided) => ({
    ...provided,
    fontFamily: "var(--font-montserrat)",
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#a2a2a2",
  }),

  multiValue: (provided) => ({
    ...provided,
    padding: "4px",
    backgroundColor: "#f8fafc",
    borderRadius: "100px",
    margin: "0 4px 0 0",
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    fontFamily: "var(--font-montserrat)",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: 1.5,
    color: "#7793b7",
  }),

  multiValueRemove: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    borderRadius: "100%",

    "&:hover": {
      backgroundColor: "rgba(199, 224, 246, 0.2)",
    },
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  clearIndicator: (provided) => ({
    ...provided,
    fill: "#a2a2a2",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
    backgroundColor: "#fff",
    overflow: "hidden",
    marginTop: "2px",
  }),

  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),

  option: (provided, state) => ({
    ...provided,
    fontFamily: "var(--font-montserrat)",
    color: state.isSelected
      ? "#aad2f2"
      : state.isFocused
        ? "#aad2f2"
        : "#a2a2a2",
    backgroundColor: "transparent",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "1.5",
    letterSpacing: "0.01em",
    padding: "12px 10px",
    cursor: "pointer",
  }),
};
