import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Cadastro from "../components/CadastroClientes";
import Listagem from "../components/Listagem";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="cadastro"
                    element={<Cadastro />} />
                <Route path="listagem"
                    element={<Listagem />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter; 