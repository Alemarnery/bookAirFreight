import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const onChanged = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const RenderedTable = () => {
    if (submit) {
      const { shipping, startCountry, destinationCountry, quotePrice } = inputs;

      let START_MIN_DAY;
      let START_MAX_DAY;

      let END_MIN_DAY;
      let END_MAX_DAY;

      switch (shipping) {
        case "Air":
          START_MIN_DAY = 3;
          START_MAX_DAY = 8;

          END_MIN_DAY = 2;
          END_MAX_DAY = 5;

          break;
        case "Ocean":
          START_MIN_DAY = 25;
          START_MAX_DAY = 31;

          END_MIN_DAY = 5;
          END_MAX_DAY = 11;
          break;
        default:
          break;
      }

      // Retorna un entero aleatorio entre min (incluido) y max (excluido)
      //   const startDay = Math.floor(
      //     Math.random() * (START_MAX_DAY - START_MIN_DAY) + START_MIN_DAY
      //   );

      const startDay = Math.floor(
        Math.random() * (START_MAX_DAY - START_MIN_DAY) + START_MIN_DAY
      );

      const waitDay = Math.floor(
        Math.random() * (END_MAX_DAY - END_MIN_DAY) + END_MIN_DAY
      );

      const endDay = startDay + waitDay;

      console.log("startDay", startDay);
      console.log("dias de espera", waitDay);
      console.log("endDay", endDay);

      /**CREAR UNA FUNCION*/
      //   const date = new Date();
      //   let monthName = date.toLocaleString("default", { month: "long" });

      //   let month = date.getMonth() + 1;
      //   const year = date.getFullYear();
      //   const days = new Date(year, month, 0).getDate(); //dias del Mes
      //   const todayNumber = date.getDate(); // dia del mes
      //   let deliveryStart = todayNumber + startDay;
      //   let deliveryEnd = todayNumber + endDay;

      //   if (deliveryStart > days) {
      //     deliveryStart = deliveryStart - days;
      //     month++;
      //     monthName = new Date(year, month, 0).toLocaleString("default", {
      //       month: "long",
      //     });
      //     deliveryEnd = deliveryStart + waitDay;
      //   }

      //   console.log("numero de hoy", todayNumber);
      //   console.log("days in month", days);

      return (
        <table>
          <thead>
            <tr>
              <th>Traditional {shipping} freight</th>
              <th>
                {startCountry} - {destinationCountry}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{startDay}</td>
              <td>US $</td>
            </tr>
            <tr>
              <td>
                {/* {monthName} {deliveryStart} - {monthName} {deliveryEnd} */}
              </td>
              <td>info {quotePrice}</td>
            </tr>
          </tbody>
        </table>
      );
    }
    return null;
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

        <div>
          <h1>Resume</h1>
          <RenderedTable />
        </div>
      </form>
    </div>
  );
};

export default Form;
