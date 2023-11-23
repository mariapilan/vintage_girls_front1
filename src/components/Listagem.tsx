import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from "../App.module.css";
import { CadastroClientesInterface } from '../interfaces/CadastroClientesInterface';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listagem = () => {

    const [usuarios, setUsuarios] = useState<CadastroClientesInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.name === "pesquisa"){
            setPesquisa(e.target.value);
    }
}

    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {

                const response = await axios.post('http://127.0.0.1:8000/api/cliente/nome',
                    { nome: pesquisa },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"

                        }

                    }).then(function (response) {
                        if(response.data.status === true){

                            setUsuarios(response.data.data);
                        }
                        else{
                            console.log("error");
                        }
                    }).catch(function (error) {
                        console.log(error);

                    });



            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/cliente/all');
                setUsuarios(response.data.data);

            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const excluir = (id: number) =>{
        axios.delete('http://127.0.0.1:8000/api/cliente/remover/' +id)
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/cliente/all');
                setUsuarios(response.data.data);

            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }
        }

    

        fetchData();
    }

    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                    <div className='col-md mb-5'>
                        <div className='card'>
                            <div className='card-boy'>
                                <h2 className='card-title'>Pesquisar</h2>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-6'>
                                        <input type="text" name="pesquisa" className='form-control' onChange={handleState} />
                                    </div>
                                    <div className='col-1'>
                                        <button type='submit' className='btn btn-black btn-sm'>Pesquisar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-title'>
                                Listagem de Clientes
                            </h4>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Celular</th>
                                        <th>E-mail</th>
                                        <th>CPF</th>
                                        <th>dataNascimento</th>
                                        <th>cidade</th>
                                        <th>estado</th>
                                        <th>pais</th>
                                        <th>rua</th>
                                        <th>numero</th>
                                        <th>bairro</th>
                                        <th>cep</th>
                                        <th>Ações</th>
                    
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.nome}</td>
                                            <td>{usuario.celular}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.cpf}</td>
                                            <td>{usuario.dataNascimento}</td>
                                            <td>{usuario.cidade}</td>
                                            <td>{usuario.estado}</td>
                                            <td>{usuario.pais}</td>
                                            <td>{usuario.rua}</td>
                                            <td>{usuario.numero}</td>
                                            <td>{usuario.bairro}</td>
                                            <td>{usuario.cep}</td>
                                            
                                            
                                            
                                           
                                           
                                            <td className='d-grid gap-1 col-4 '>
                                            <div className='col-1'>
                                                <Link to={"/editarcliente/" + usuario.id } className='btt btn-black btn-sm'>Editar</Link>
                                               </div>
                                               <div className='col-1'>
                                                <button onClick={() => excluir(usuario.id)} className='btt btn-white btn-sm'>Excluir</button>
                                                </div>
                                                <div className='col-15'>
                                                <Link to={"/senhacliente/" + usuario.id } className='btt btn-black btn-sm'>Recuperar senha</Link>
                                   
                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div >
            </main >
        </div >
    );
}

export default Listagem;