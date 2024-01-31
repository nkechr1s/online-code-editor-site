import { HasOwnPropertyFunction } from "src/lib/types";

class HeadingUtils {
  static hasOwnProperty: HasOwnPropertyFunction = (obj, prop) => {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };

  static sanitizeHTML(input: string) {
    // Use a temporary element to remove HTML tags
    const tempElement = document.createElement("div");
    tempElement.innerHTML = input;
    return tempElement.textContent || input;
  }
}

export default HeadingUtils;
