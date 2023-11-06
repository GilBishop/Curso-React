import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, ObjetosHTML } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Fragment, se usa para no poner etiquetas, se deja vacio las etiquetas <>
root.render(
  <>
  <TaskCard/>
    <Button text="Click Me"/>
    <Button text="Pay"/>
    <Button text="" text2="Optional"/>
    <Greeting />
    <ObjetosHTML />
    <Product
      nameProduct="Uva"
      price={25}
      status={true}
      types={["morada", "verde", "amarilla"]}
      features={{ size: "medium", color: "red", cuantity: 8 }}
    />
  </>
);
