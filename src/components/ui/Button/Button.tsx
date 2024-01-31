import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { ButtonProps } from "src/lib/types";
import styles from "./Button.module.css";

const buttonClassNames = {
  primary: styles.primaryButton,
  secondary: styles.secondaryButton,
};

const Button = ({ variant, text, onClick, href, ...props }: ButtonProps) => {
  const ButtonComponent = href ? Link : "button";

  let buttonProps:
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
    | React.ButtonHTMLAttributes<HTMLButtonElement>;

  if (href) {
    buttonProps = {
      to: href,
      ...props,
      className: buttonClassNames?.[variant] ?? buttonClassNames.primary,
    } as LinkProps;
  } else {
    buttonProps = {
      onClick,
      ...props,
      type: "button",
      className: buttonClassNames?.[variant] ?? buttonClassNames.primary,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ButtonComponent {...(buttonProps as any)}>{text}</ButtonComponent>;
};

export default Button;
