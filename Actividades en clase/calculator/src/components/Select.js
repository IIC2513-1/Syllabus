import React from "react";
import styled from "styled-components"

const Select = ({ value, setValue }) => {
  const handleChange = (e) => setValue(e.target.value);

  return (
    <CustomSelect value={value} onChange={handleChange}>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </CustomSelect>
  );
};

const CustomSelect = styled.select`
  background: transparent;
  border: none;
  font-size: 14px;
  height: 30px;
  padding: 5px;
`;

export default Select;