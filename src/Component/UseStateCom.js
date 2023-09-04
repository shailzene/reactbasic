import { useState } from "react";


function UseStateCom({ user }) {
  const [color, setColor] = useState("red");
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");

  // second example 
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Jiva",
    year: "1997",
    color: "green"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1 style={{ color: "red" }}>Use State Page</h1>
      <h2>My {brand}{user}</h2>
      <h2>This value from usecontext: {user}</h2>
      <p>
        It is a <b>{color}</b> {model} from {year}.
      </p>

      -------------------------------
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}
export default UseStateCom;