import { Field, ErrorMessage } from "formik";
import TextError from "./text.error";

interface TextAreaProps {
  label: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name }) => {
  return (
    <div>
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <Field
        as="textarea"
        name={name}
        id={name}
        className="w-full px-4 py-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
