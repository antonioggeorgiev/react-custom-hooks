import * as React from "react";
import { useState } from "react";

export const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value: boolean) => {
    setValue((currentValue) => {
      return typeof value === "boolean" ? value : !currentValue;
    });
  };

  return [value, toggleValue];
};
