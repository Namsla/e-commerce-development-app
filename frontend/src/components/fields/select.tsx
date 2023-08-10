import { Field, ErrorMessage } from "formik";
import TextError from "./text.error";

interface Option {
  key: string;
  value: string;
}

interface SelectProps {
  label: string;
  name: string;
  options?: Option[];
}

const Select: React.FC<SelectProps> = ({ label, name, options }) => {
  return (
    <div>
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <Field
        as="select"
        name={name}
        id={name}
        className="w-full px-4 py-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring"
      >
        {options &&
          options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
