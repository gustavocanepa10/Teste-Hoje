import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "./pages/loginPage/loginPage";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Contratos } from "./components/Contratos/Contratos";
import { Clientes } from "./components/Clientes/clientes";
import { Usuarios } from "./components/Usuários/Usuarios";
import { Imoveis } from "./components/Imoveis/Imoveis";
import { AReceber } from "./components/AReceber/AReceber";
import { APagar } from "./components/APagar/APagar";
import { NotFoundPage } from "./pages/notFound/NotFoundPage";

export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LoginPage />,
  },


  {path : "*", element : <NotFoundPage/>},

  // ROTAS LOGADAS
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      

      { path: "clientes", element: <Clientes /> },
      { path: "imoveis", element: <Imoveis /> },
      { path: "contratos", element: <Contratos /> },
      { path: "usuarios", element: <Usuarios /> },
      { path: "areceber", element: <AReceber /> },
      { path: "apagar", element: <APagar /> },
    ],
  },
]);
