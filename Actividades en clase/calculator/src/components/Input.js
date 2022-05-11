import React from "react";
import styled from "styled-components"

const Input = ({ value, setValue }) => {
  const handleChange = (e) => setValue(e.target.value);

  return <CustomInput type="number" value={value} onChange={handleChange} />
};

const CustomInput = styled.input``;

export default Input;