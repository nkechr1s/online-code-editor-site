export type headerTypes = {
  title: string;
};

export type heroTypes = {
  title: string;
  description: string;
  buttonText: string;
  linkUrl: string;
};

export type ButtonType = "primary" | "secondary";

export interface ButtonProps {
  variant: ButtonType;
  text: string;
  onClick?: () => void;
  href?: string;
}
