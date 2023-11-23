import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import Listagem from "../components/Listagem";
import CadastroProfissional from "../components/CadastroProfissional";
import ListagemProfissional from "../components/ListagemProfissional";
import CadastroServico from "../components/CadastroServico";
import ListagemServico from "../components/ListagemServico";
import EditarCliente from "../components/EditarCliente";
import EditarProfissional from "../components/EditarProfissional";
import EditarServico from "../components/EditarServico";
import Cadastro from "../components/CadastroClientes";
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="cadastro"
                    element={<Cadastro/>} />

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

                <Route path="/editarcliente/:id"
                    element={<EditarCliente />} />

                <Route path="/editarprofissional/:id"
                    element={<EditarProfissional />} />

                <Route path="/editarservico/:id"
                    element={<EditarServico />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter; 