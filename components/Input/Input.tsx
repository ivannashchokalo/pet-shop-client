import { Field } from "formik";
import clsx from "clsx";

interface InputProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  id?: string;
  readOnly?: boolean;
  hasError?: boolean;
}

export default function Input({
  name,
  type,
  placeholder,
  className,
  id,
  readOnly,
  hasError,
}: InputProps) {
  return (
    <Field
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={clsx(
        "h-11 w-full rounded-[20px] border bg-transparent px-4 text-[var(--text-main)] placeholder:text-[#a2a2a2] focus:outline-none md:w-[350px]",
        hasError
          ? "border-red-500 focus:border-red-500"
          : "border-[#a2a2a2] focus:border-[#aad2f2]",
        className,
      )}
      readOnly={readOnly}
    />
  );
}
