import React from "react";

const Select = ({ title }) => {
  return (
    <>
      <label>{title}</label>
      <select>
        <option value="Air">Air</option>
        <option value="Ocean">Ocean</option>
      </select>
    </>
  );
};

export default Select;
