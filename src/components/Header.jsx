import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="p-10 bg-indigo-600 flex flex-col md:flex-row justify-between items-center">
                <div className="container mx-auto">
                    <h1 className="font-bold text-2xl text-indigo-200 text-center md:text-left">Administrador de Pacientes de <span className="text-white font-black"> Veterinaria</span> </h1>
                </div>
                <nav className="flex flex-col items-center md:flex-row gap-5 mt-5 md:mt-0">
                    <Link to="/admin" className="text-white uppercase font-bold  text-sm">Pacientes</Link>
                    <Link to="/admin" className="text-white uppercase font-bold  text-sm">Perfil</Link>
                    <button
                        type="button"
                        className="text-white text-sm uppercase font-bold"
                    >Cerrar Sesión</button>
                </nav>
            </header>
        </>
    )
}

export default Header;