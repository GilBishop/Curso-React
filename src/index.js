import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting, ObjetosHTML } from './Greeting';
import Product, { Navbar } from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'))


//Fragment, se usa para no poner etiquetas, se deja vacio las etiquetas <>
root.render(
    < >
        <Greeting />
        <ObjetosHTML />
        <Product 
        nameProduct="Uva" 
        price={25} 
        status={true} 
        types={['roja', 'verde', 'amarilla']} 
        features={{ size: "medium", color: "red", cuantity: 8 }} 
        />
    </>

)