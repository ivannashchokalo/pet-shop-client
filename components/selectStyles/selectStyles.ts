import { SelectOption } from "@/types/selectOptions";
import type { StylesConfig } from "react-select";

const SELECT_BG = "var(--select-bg)";
const SELECT_BORDER_COLOR = "var(--select-border-color)";
const SELECT_BORDER_COLOR_HOVER = "var(--select-border-color-hover)";
const SELECT_TEXT_COLOR = "var(--select-text-color)";
const SELECT_MULTI_VALUE_BG = "var(--select-multi-value-bg)";
const SELECT_MULTI_VALUE_TEXT = "var(--select-multi-value-text)";

export const selectStyles: StylesConfig<SelectOption> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: SELECT_BG,
    borderRadius: "20px",
    borderWidth: "1px",
    borderStyle: "solid",
    padding: "0 10px",
    width: "277px",
    cursor: "pointer",
    boxShadow: "none",
    height: "44px",
    borderColor: state.isFocused
      ? SELECT_BORDER_COLOR_HOVER
      : SELECT_BORDER_COLOR,

    "&:hover": {
      borderColor: SELECT_BORDER_COLOR_HOVER,
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),

  placeholder: (provided) => ({
    ...provided,
    color: SELECT_TEXT_COLOR,
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
    backgroundColor: SELECT_MULTI_VALUE_BG,
    borderRadius: "100px",
    margin: "0 4px 0 0",
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    fontFamily: "var(--font-montserrat)",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: 1.5,
    color: SELECT_MULTI_VALUE_TEXT,
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
    fill: SELECT_TEXT_COLOR,
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
    backgroundColor: SELECT_BG,
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
    color:
      state.isSelected || state.isFocused
        ? SELECT_BORDER_COLOR_HOVER
        : SELECT_TEXT_COLOR,
    backgroundColor: "transparent",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "1.5",
    letterSpacing: "0.01em",
    padding: "12px 10px",
    cursor: "pointer",
  }),
};
