import { Field, ErrorMessage, FieldProps } from "formik";
import TextError from "./text.error";

interface Option {
  key: string;
  value: string;
}

interface RadioButtonProps {
  label: string;
  name: string;
  options?: Option[];
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, options }) => {
  return (
    <div>
      <label className="font-bold my-1">{label}</label>
      <Field name={name}>
        {({ field }: FieldProps) =>
          options &&
          options.map((option) => (
            <div key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={option.value === field.value}
                className="mr-2"
              />
              <label htmlFor={option.value}>{option.key}</label>
            </div>
          ))
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButton;
