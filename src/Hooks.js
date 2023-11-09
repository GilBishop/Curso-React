import { useState, useEffect } from "react";
import {
  IoMdAddCircle,
  IoIosRemoveCircle,
  IoIosRadioButtonOff,
} from "react-icons/io";

export const Hooks = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        <IoMdAddCircle />
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        <IoIosRadioButtonOff />
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        <IoIosRemoveCircle />
      </button>
    </div>
  );
};

export const Hooks2 = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          alert("Mensaje escrito: " + message);
        }}
      >
        Guardar
      </button>
    </div>
  );
};
