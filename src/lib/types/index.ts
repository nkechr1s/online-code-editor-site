export type HeaderTypes = {
  title: string;
};

export type HeroTypes = {
  title: string;
  description: string;
  buttonText: string;
  linkUrl: string;
};

export type ButtonType = "primary" | "secondary" | "custom";

export interface ButtonProps {
  variant: ButtonType;
  text: string;
  onClick?: () => void;
  href?: string;
  customClassName:string
}
