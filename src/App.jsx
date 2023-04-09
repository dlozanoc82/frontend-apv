import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import ResetPassword from "./pages/ResetPassword";
import NuevoPassword from "./pages/NuevoPassword";
import { AuthProvider } from "./context/AuthProvider";
import AdministrarPacientes from "./pages/AdministrarPacientes";


//Component 
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<AuthLayout />}>
                        <Route index element={<Login />} />
                        <Route path="registrar" element={<Registrar />} />
                        <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                        <Route path="reset-password" element={<ResetPassword />} />
                        <Route path="reset-password/:token" element={<NuevoPassword />} />
                    </Route>

                    <Route path="/admin"  element={<RutaProtegida/>}>
                        <Route index element={<AdministrarPacientes/>}></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
