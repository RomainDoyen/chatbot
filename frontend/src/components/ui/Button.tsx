import { ButtonProps } from "../../types/types";

const Button: React.FC<ButtonProps> = ({ 
  onclick, className, text, icon 
}) => {
  return (
    <button
      className={className}
      onClick={onclick}
    >
      {text || icon}
    </button>
  );
};

export default Button;