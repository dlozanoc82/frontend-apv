
const Paciente = ({paciente}) => {
    
    const {email, fechaDeAlta, nombre, propietario, sintomas, _id} = paciente;

    console.log(fechaDeAlta);

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha);
        return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(nuevaFecha);
    }



    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase my-2 text-indigo-700">Nombre:{' '}
                <span className="font-normal normal-case text-black">{nombre}</span>
            </p>
            <p className="font-bold uppercase my-2 text-indigo-700">Propietario:{' '}
                <span className="font-normal normal-case text-black">{propietario}</span>
            </p>
            <p className="font-bold uppercase my-2 text-indigo-700">Email Contacto:{' '}
                <span className="font-normal normal-case text-black">{email}</span>
            </p>
            <p className="font-bold uppercase my-2 text-indigo-700">Fecha de Alta:{' '}
                <span className="font-normal normal-case text-black">{formatearFecha(fechaDeAlta)}</span>
            </p>
            <p className="font-bold uppercase my-2 text-indigo-700">Sintomas:{' '}
                <span className="font-normal normal-case text-black">{sintomas}</span>
            </p>
        </div>
    )
}

export default Paciente;