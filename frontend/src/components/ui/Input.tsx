import { InputProps } from "../../types/types";

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;