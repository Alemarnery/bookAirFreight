import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const onChanged = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Starting Country</label>
          <input name="startCountry" onChange={(e) => onChanged(e)} />
        </div>
        <div>
          <label>Destination Country</label>
          <input name="destinationCountry" onChange={(e) => onChanged(e)} />
        </div>
        <div>
          <label>Quote Price</label>
          <input name="quotePrice" onChange={(e) => onChanged(e)} />
        </div>
        <div>
          <label>Shipping Channel</label>
          <select name="shipping" onChange={(e) => onChanged(e)}>
            <option value="Air">Air</option>
            <option value="Ocean">Ocean</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        yvuvyv jujuju yyhyhy8
      </form>
    </div>
  );
};

export default Form;
