import { SelectOption } from "@/types/selectOptions";
import type { StylesConfig } from "react-select";

export const selectStyles: StylesConfig<SelectOption> = {
  // Головний контейнер Select (рамка, висота, padding)
  // container: (provided) => ({
  //   ...provided,
  //   width: "100%",
  // }),
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

  // Контейнер для placeholder та вибраного значення
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),

  // Placeholder ("Select breed")
  placeholder: (provided) => ({
    ...provided,
    color: "#a2a2a2",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "1.5",
    margin: 0,
  }),

  // Вибране значення (для звичайного Select)
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

  // Тег у Multi Select
  multiValue: (provided) => ({
    ...provided,
    padding: "4px",
    backgroundColor: "#f8fafc",
    border: "border: 1px solid #7793b7",
    borderRadius: "100px",
    marginRight: "0 4px 0 0",
  }),

  // Текст усередині тегу
  multiValueLabel: (provided) => ({
    ...provided,
    fontFamily: "var(--font-montserrat)",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: 1.5,
    color: "#7793b7",
  }),

  // Кнопка × для видалення тегу
  multiValueRemove: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    borderRadius: "100%",

    "&:hover": {
      backgroundColor: "rgba(199, 224, 246, 0.2)",
    },
  }),

  // Стрілка відкриття меню
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),

  // Вертикальна риска між значенням і стрілкою
  indicatorSeparator: () => ({
    display: "none",
  }),

  // Кнопка очищення (×), якщо isClearable
  clearIndicator: (provided) => ({
    ...provided,
    fill: "#a2a2a2",
  }),

  // Контейнер випадаючого меню
  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
    backgroundColor: "#fff",
    overflow: "hidden",
    marginTop: "2px",
  }),

  // Контейнер зі списком опцій
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),

  // Окремий пункт меню
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
