import { Field, ErrorMessage, FieldProps } from "formik";
import clsx from "clsx";
import TextError from "./text.error";

interface Option {
  key: string;
  value: string;
}

interface CheckBoxProps {
  label: string;
  name: string;
  options?: Option[];
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, name, options }) => {
  return (
    <div>
      <label className="font-bold my-1">{label}</label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <>
            {options &&
              options.map((option) => (
                <div key={option.key}>
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                    className={clsx("mr-2")}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              ))}
          </>
        )}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CheckBox;
