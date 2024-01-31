import { HeadingProps, HeadingMap } from "src/lib/types";

const headingMap: HeadingMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

const Heading = ({
  variant = "h1",
  className,
  text,
  ...props
}: HeadingProps) => {
  const isValidVariant = Object.prototype.hasOwnProperty.call(
    headingMap,
    variant
  );

  const HeadingComponent = headingMap[variant];

  if (isValidVariant) {
    return (
      <HeadingComponent {...props} className={className}>
        {text}
      </HeadingComponent>
    );
  }
};

export default Heading;
