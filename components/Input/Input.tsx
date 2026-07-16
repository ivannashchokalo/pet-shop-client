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
        "h-11 w-full rounded-[20px] border bg-transparent px-4 text-[var(--text-secondary)] placeholder:text-[var(--text-placeholder)] focus:outline-none md:w-[350px]",
        hasError
          ? "border-red-500 focus:border-red-500"
          : "border-[var(--border-placeholder)] focus:border-[var(--border-secondary)]",
        className,
      )}
      readOnly={readOnly}
    />
  );
}
