import { Link } from "react-router-dom";

const Registrar = () => {
    return (
        <>
            <div>
                <h1 className='text-indigo-600 font-black text-6xl'>
                    Crea tu cuenta y administra 
                    <span className='text-black'> tus Pacientes</span>
                </h1>
            </div>

            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                <form>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>
                            Nombre
                        </label>
                        <input className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' type="text" placeholder='Tu nombre' />
                    </div>

                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>
                            Email
                        </label>
                        <input className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' type="email" placeholder='Email de Registro' />
                    </div>

                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>
                            Password
                        </label>
                        <input className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' type="password" placeholder='Tu Password' />
                    </div>

                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>
                            Confirma tu Contraseña
                        </label>
                        <input className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' type="password" placeholder='Tu Password' />
                    </div>

                    <input 
                        type="submit" 
                        value="Crear cuenta" 
                        className='bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto'
                    />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link  className="block text-center my-5 text-gray-500" to='/'>
                        ¿Ya tienes una cuenta? Inicia Sesión
                    </Link>
                    <Link className="block text-center my-5 text-gray-500" to='/reset-password'>
                        Olvide mi contraseña
                    </Link>
                </nav>
            </div>

        </>
    )
}

export default Registrar;