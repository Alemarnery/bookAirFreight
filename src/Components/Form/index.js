import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label>Starting Country</label>
          <input></input>
        </div>
        <div>
          <label>Destination Country</label>
          <input></input>
        </div>
        <div>
          <label>Quote Price</label>
          <input></input>
        </div>
        <div>
          <label>Shipping Channel</label>
          <select>
            <option value="Air">Air</option>
            <option value="Ocean">Ocean</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
