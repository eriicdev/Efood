// Importação de Bibliotecas externas
import { createBrowserRouter } from "react-router-dom";
// Importação das paginas
import Home from "./Home";
import Cart from "./Cart";
import Teste from "../components/Teste";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <h1>Erro na pagina</h1>,
    },
    {
        path: '/restaurante/:id',
        element: <Cart />,
    },
    {
        path: '/teste',
        element: <Teste />,
    }
]);
export default router;