
const Formulario = () => {
    return (
        <>
            <p className="text-lg text-center mb-10">Añade tus Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>
            <form className="bg-white py-10 px-5 mb-10 md:mb-0 shadow-md rounded-md">
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre de la Mascota</label>
                    <input 
                        id="mascota"
                        type="text" 
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre del propietario</label>
                    <input 
                        id="propietario"
                        type="text" 
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Email del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha Alta</label>
                    <input 
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                    <textarea 
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-indigo-500"
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Agregar Paciente"
                />

            </form>
        </>
    )
}

export default Formulario;