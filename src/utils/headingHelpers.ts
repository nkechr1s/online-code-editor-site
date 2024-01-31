import { HasOwnPropertyFunction } from "src/lib/types";

export const hasOwnProperty: HasOwnPropertyFunction = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
