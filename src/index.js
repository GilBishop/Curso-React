import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, ObjetosHTML } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Post } from "./Post";
import { Array } from "./Arrays";
import {Hooks, Hooks2} from "./Hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Fragment, se usa para no poner etiquetas, se deja vacio las etiquetas <>
root.render(
  <>
    <TaskCard ready={false} />
    <hr/>
    <Post/>
    <hr/>
    <Button text="Click Me" />
    <Button text="Pay" />
    <Button text="" text2="Optional" />
    <input id="hi" onChange={(e) => {
      console.log(e.target.value)
    }}></input>
    <hr/>
    <Greeting />
    <hr/>
    <ObjetosHTML />
    <hr/>
    <Product
      nameProduct="Uva"
      price={25}
      status={true}
      types={["morada", "verde", "amarilla"]}
      features={{ size: "medium", color: "red", cuantity: 8 }}
    />
    <hr/>
    <Array/>
    <hr/>
    <Hooks/>
    <hr/>
    <Hooks2/>
    <hr/>
  </>
);
