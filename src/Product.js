//props
function Product(props) {
    
    return <div>
        <h1>Producto {props.nameProduct}</h1>
        <p>Precio {props.price}</p>
        <p>Su estatus es {props.status ? 'Activo':'Inactivo'}</p>
    </div>
}

export function Navbar() {
    return <nav>

    </nav>
}
export default Product