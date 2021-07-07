import React from "react";

const Input = ({ title }) => {
  return (
    <>
      <label>{title} </label>
      <input placeholder={title} />
    </>
  );
};

export default Input;
