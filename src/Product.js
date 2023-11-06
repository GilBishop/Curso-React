//props
function Product({ nameProduct, price, status, types, features }) {
  return (
    <div>
      <h1>Producto {nameProduct}</h1>
      <p>Precio {price}</p>
      <p>Su estatus es {status ? "Activo" : "Inactivo"}</p>
      <p>La uva es de tipo {types[0]}</p>
      <ul>
        <li>Las uvas son de tamaño {features.size}</li>
        <li>Hay una cantidad de uvas de {features.cuantity}</li>
      </ul>
    </div>
  );
}

export function Navbar() {
  return <nav></nav>;
}
export default Product;
