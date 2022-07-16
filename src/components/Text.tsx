import React from "react";
import { Props } from "../utils/interface";

export const TextInput: React.FC<Props> = ({ value, handleChange  }) => {
  return (
    <div>
      <input
        type={"text"}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
