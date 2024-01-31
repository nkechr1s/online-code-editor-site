import { HeadingProps, HeadingMap } from "src/lib/types";
import { hasOwnProperty } from "src/utils/headingHelpers";

const headingMap: HeadingMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const Heading = ({ variant, className, text, ...props }: HeadingProps) => {
  const isValidVariant = hasOwnProperty(headingMap, variant);
  const HeadingComponent = headingMap[variant];

  if (isValidVariant) {
    return (
      <HeadingComponent className={className} {...props}>
        {text}
      </HeadingComponent>
    );
  }
};

Heading.defaultProps = {
  variant: "h1",
  className: "",
};

export default Heading;
