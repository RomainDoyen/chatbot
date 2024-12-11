type ButtonProps = {
  className?: string;
  onclick?: () => void;
  text?: string;
  icon?: React.ReactNode;
};

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