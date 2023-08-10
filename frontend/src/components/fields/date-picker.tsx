import { Field, ErrorMessage, FieldProps } from "formik";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "./text.error";

interface DatePickerProps {
  label: string;
  name: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, name }) => {
  return (
    <div>
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <Field name={name}>
        {({ field, form }: FieldProps<any>) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              className="w-full px-4 py-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring"
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;
