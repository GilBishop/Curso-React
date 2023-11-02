import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting() {
    const status = true
    return <div>
        <h1>Greeting Component{
            status ? "Activo": "No esta"
        }</h1>
        <p>sdwdq 123</p>
    </div>
}

root.render(<div>
    <Greeting />

</div>)