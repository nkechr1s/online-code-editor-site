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
  target,
  ...props
}: ButtonProps) => {
  const isExternalLink = target === "_blank";
  const ButtonComponent = isExternalLink ? "a" : Link;

  const baseClassName =
    variant === "custom"
      ? customClassName || ""
      : buttonClassNames?.[variant] ?? "";

  const className = `${baseClassName} ${additionalClassName ?? ""}`;

  const commonProps = {
    className: className,
    ...props,
  };

  const externalLinkProps = {
    href,
    target,
    rel: "norefferer nofollow",
    ...commonProps,
  } as React.AnchorHTMLAttributes<HTMLAnchorElement>;

  const internalLinkProps = {
    ...(href ? { to: href } : {}),
    ...commonProps,
  } as LinkProps;

  const buttonProps = isExternalLink ? externalLinkProps : internalLinkProps;

  if (!isExternalLink && !href) {
    buttonProps.type = "button";
    buttonProps.onClick = onClick;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ButtonComponent {...(buttonProps as any)}>{text}</ButtonComponent>;
};

//to use the customClassName: <Button variant="custom" customClassName="you-class-name"/>
//className can extend the styles of buttonClassNames
//use target="_blank" ton open href in new tab
Button.defaultProps = {
  customClassName: "",
  className: "",
  target: "",
};

export default Button;
