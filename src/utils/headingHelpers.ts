import { HasOwnPropertyFunction } from "src/lib/types";

export const hasOwnProperty: HasOwnPropertyFunction = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

export const sanitizeHTML = (input: string) => {
  // Use a temporary element to remove HTML tags
  const tempElement = document.createElement("div");
  tempElement.innerHTML = input;
  return tempElement.textContent || input;
};
