import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, ObjetosHTML } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Fragment, se usa para no poner etiquetas, se deja vacio las etiquetas <>
root.render(
  <>
    <TaskCard ready={false} />
    <Post/>
    <Button text="Click Me" />
    <Button text="Pay" />
    <Button text="" text2="Optional" />
    <input id="hi" onChange={(e) => {
      console.log(e.target.value)
    }}></input>
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
