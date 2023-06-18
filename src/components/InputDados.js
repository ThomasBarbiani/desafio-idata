import { useState } from "react";
import "./inputDados.css";

const InputDados = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="form-input-container">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
    </div>
  );
};

export default InputDados;