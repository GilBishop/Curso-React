// JSX con Optional 

export function Greeting() {
    const status = true

    return <h1>{status ? 'Esta Activo' : 'No esta activo'}</h1>
}

// JSX presentando un objeto
export function ObjetosHTML() {
    const persona1 = {
        firstName: 'Mario',
        lastName: 'Perez'
    }

    return <div>
        <h1>{persona1.firstName}</h1>
        <h2>{persona1.lastName}</h2>
        <h6>{JSON.stringify(persona1)}</h6>
    </div>
}

