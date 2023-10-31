import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Cadastro from "../components/CadastroClientes";
import Listagem from "../components/Listagem";
import CadastroProfissional from "../components/CadastroProfissional";
import ListagemProfissional from "../components/ListagemProfissional";
import CadastroServico from "../components/CadastroServico";
import ListagemServico from "../components/ListagemServico";
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="cadastro"
                    element={<Cadastro />} />

                <Route path="listagem"
                    element={<Listagem />} />

                <Route path="listagemprofissional"
                    element={<ListagemProfissional />} />

                <Route path="cadastroprofissional"
                    element={<CadastroProfissional />} />

                <Route path="cadastroservico"
                    element={<CadastroServico />} />

                <Route path="listagemservico"
                    element={<ListagemServico />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter; 