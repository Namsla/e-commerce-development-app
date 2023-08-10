import { Field, ErrorMessage } from "formik";
import TextError from "./text.error";

interface InputProps {
  label: string;
  name: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type }) => {
  return (
    <div>
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        className="w-full px-4 py-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
