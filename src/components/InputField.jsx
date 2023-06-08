import React from "react";
import Label from "./Label";
import Input from "./Input";


const InputField = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
  type,
}) => {
  return (
    <div class="relative h-10 w-full min-w-[200px]">
      <Input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        type={type}
      />
      <Label id={id} placeholder={placeholder} />

    </div>
  );
};

export default InputField;
