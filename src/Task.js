import "./task.css";

export function TaskCard({ ready }) {
  /*
    Styles con JS 
    const cardStyle = {background: '#202020', color: '#fff', padding: '20px'}
    const titleStyle = {fontWeight: 'lighter'}
    en la etiqueta se agrega style={cardStyle} adentro
    de las llaves va el nombre del objeto.
    */
  return (
    <div className="card">
      <h1>Tarjeta Presentacion</h1>
      <span className={ready ? "bg-green":"bg-red"}
      >{ready ? "Esta activo" : "Esta inactiva"}</span>
    </div>
  );
}
