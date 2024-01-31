import { ButtonProps } from "src/lib/types";

import styles from "./Button.module.css";
const buttonClassNames = {
  primary: styles.primaryButton,
  secondary: styles.secondaryButton,
};

const Button = ({ variant, text, onClick, href, ...props }: ButtonProps) => {
  const ButtonComponent = href ? "a" : "button";
  const buttonProps = {
    ...(href ? { href } : { onClick }),
    ...props,
    className: buttonClassNames?.[variant] ?? buttonClassNames.primary,
  };

  return <ButtonComponent {...buttonProps}>{text}</ButtonComponent>;
};

export default Button;
