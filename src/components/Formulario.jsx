import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import usePacientes from "../hooks/usePacientes";

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fechaDeAlta, setFechaDeAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [id, setId] = useState(null);

    const [alerta, setAlerta] = useState({});

    const { guardarPaciente, paciente } = usePacientes();

    useEffect(() => {
        
        if (paciente?.nombre) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFechaDeAlta(paciente.fechaDeAlta);
            setSintomas(paciente.sintomas);
            setId(paciente._id)
        }

        console.log('Render o cambio paciente');
    }, [paciente])
    

    const handleSubmit = e => {
        e.preventDefault();

        //Validar formulario
        if ([nombre, propietario, email, fechaDeAlta, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return;
        }


        guardarPaciente({ nombre, propietario, email, fechaDeAlta, sintomas, id });
        setAlerta({
            msg: 'Guardado Correctamente'
        });

        setNombre('');
        setPropietario('');
        setEmail('');
        setFechaDeAlta('');
        setSintomas('');
        setId(null);

    }

    const { msg } = alerta;

    return (
        <>
            <h2 className="font-black text-3xl text-center">Administrador de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Añade tus pacientes y
                <span className="text-indigo-600 font-bold"> Administralos</span> 
            </p>

            <form className="bg-white py-10 px-5 mb-5 md:mb-0 shadow-md rounded-md" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre de la Mascota</label>
                    <input 
                        id="nombre"
                        type="text" 
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre del propietario</label>
                    <input 
                        id="propietario"
                        type="text" 
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Email del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="fechaDeAlta">Fecha Alta</label>
                    <input 
                        id="fechaDeAlta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                        value={fechaDeAlta}
                        onChange={e => setFechaDeAlta(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                    <textarea 
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={id ? 'Guardar Cambios': 'Agregar Pacientes'}
                />

            </form>

            {msg && <Alerta alerta={alerta} />}

        </>
    )
}

export default Formulario;