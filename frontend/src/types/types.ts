export type ButtonProps = {
  className?: string;
  onclick?: () => void;
  text?: string;
  icon?: React.ReactNode;
};

export type InputProps = {
  type?: "text" | "password" | "email" | "number" | "tel";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}