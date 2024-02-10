import { HeadingProps, HeadingMap } from "src/lib/types";
import HeadingUtils from "src/lib/common/HeadingUtils";

const headingMap: HeadingMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const Heading = ({
  variant,
  className,
  text,
  dangerouslySetInnerHTML,
  ...props
}: HeadingProps) => {
  // eslint-disable-next-line no-prototype-builtins
  const isValidVariant = HeadingUtils.hasOwnProperty(headingMap, variant);
  const HeadingComponent = headingMap[variant];

  if (isValidVariant) {
    // If dangerouslySetInnerHTML is true, render text inside dangerouslySetInnerHTML
    if (dangerouslySetInnerHTML) {
      return (
        <HeadingComponent
          className={className}
          dangerouslySetInnerHTML={{ __html: text }}
          aria-label={HeadingUtils.sanitizeHTML(text)}
          {...props}
        />
      );
    }
    // Otherwise, render text normally
    return (
      <HeadingComponent className={className} aria-label={text} {...props}>
        {text}
      </HeadingComponent>
    );
  }
};
Heading.defaultProps = {
  variant: "h1",
  className: "",
  dangerouslySetInnerHTML: false,
  text: "",
};

export default Heading;
