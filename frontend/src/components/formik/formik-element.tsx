import CheckBox from "../fields/checkbox";
import DatePicker from "../fields/date-picker";
import Input from "../fields/input";
import RadioButton from "../fields/radio-button";
import Select from "../fields/select";
import TextArea from "../fields/text-area";

interface Option {
  key: string;
  value: string;
}

interface FormikControlProps {
  className?: string;
  control: "input" | "textarea" | "select" | "radio" | "checkbox" | "date";
  label: string;
  name: string;
  options?: Option[];
  type?: string;
}

const FormikControl: React.FC<FormikControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
