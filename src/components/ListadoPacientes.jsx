import usePacientes from "../hooks/usePacientes";


const ListadoPacientes = () => {

    const { pacientes } = usePacientes();
    console.log(pacientes);

    return (
        <>
            { pacientes.length ? 
                (
                    <>
                        <h1 className="font-black text-3xl text-center">Listado de Pacientes</h1>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Asministra tus 
                            <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
                        </p>
                    </>
                ): (
                    <>
                        <h1 className="font-black text-3xl text-center">No hay Pacientes</h1>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando pacientes 
                            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                        </p>
                    </>
                )
            }
        </>
    )
}

export default ListadoPacientes;