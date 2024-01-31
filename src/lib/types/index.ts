export interface HeaderProps {
  title: string;
}

export interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  linkUrl: string;
}

export type ButtonType = "primary" | "secondary" | "custom";

export interface ButtonProps {
  variant: ButtonType;
  text: string;
  onClick?: () => void;
  href?: string;
  customClassName: string;
  className: string;
  target: string;
}

export interface HeadingProps {
  variant: string;
  className: string;
  text: string;
  dangerouslySetInnerHTML?: boolean | { __html: string };
}

export type HeadingMap = {
  [key: string]: React.ElementType;
};

export interface HasOwnPropertyFunction {
  (obj: object, prop: string): boolean;
}