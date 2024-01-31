import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { ButtonProps } from "src/lib/types";
import styles from "./Button.module.css";

const buttonClassNames = {
  primary: styles.primaryButton,
  secondary: styles.secondaryButton,
};

const Button = ({
  variant,
  text,
  onClick,
  href,
  customClassName,
  className: additionalClassName,
  ...props
}: ButtonProps) => {
  const ButtonComponent = href ? Link : "button";

  let buttonProps:
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
    | React.ButtonHTMLAttributes<HTMLButtonElement>;

  const baseClassName =
    variant === "custom"
      ? customClassName || ""
      : buttonClassNames?.[variant] ?? "";

  const className = `${baseClassName} ${additionalClassName ?? ""}`;
  if (href) {
    buttonProps = {
      to: href,
      ...props,
      className,
    } as LinkProps;
  } else {
    buttonProps = {
      onClick,
      ...props,
      type: "button",
      className,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ButtonComponent {...(buttonProps as any)}>{text}</ButtonComponent>;
};

//to use the customClassName: <Button variant="custom" customClassName="you-class-name"/>
//className can extend the styles of buttonClassNames
Button.defaultProps = {
  customClassName: "",
  className: "",
};

export default Button;
