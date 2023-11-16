import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from "../App.module.css";
import { CadastroProfissionalInterface } from '../interfaces/CadastroProfissionalInterface';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListagemProfissional = () => {

    const [profissionals, setprofissionals] = useState<CadastroProfissionalInterface[]>([]);
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

                const response = await axios.post('http://127.0.0.1:8000/api/profissional/nome',
                    { nome: pesquisa },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"

                        }

                    }).then(function (response) {
                        setprofissionals(response.data.data);
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
                const response = await axios.get('http://127.0.0.1:8000/api/profissional/all');
                setprofissionals(response.data.data);

            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);
    const excluir = (id: number) =>{
        axios.delete('http://127.0.0.1:8000/api/profissional/remover/' +id)
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/profissional/all');
                setprofissionals(response.data.data);

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
                    <div className='col-md mb-2'>
                        <div className='card'>
                            <div className='card-boy'>
                                <h5 className='card-title'>Pesquisar</h5>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-10'>
                                        <input type="text" name="pesquisa" className='form-control' onChange={handleState} />
                                    </div>
                                    <div className='col-1'>
                                        <button type='submit' className='btt btn-success'>Pesquisar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-title'>
                                Listagem de Profissionais
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
                                        <th>salario</th>
                                        <th>Ações</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {profissionals.map(profissional => (
                                        <tr key={profissional.id}>
                                            <td>{profissional.id}</td>
                                            <td>{profissional.nome}</td>
                                            <td>{profissional.celular}</td>
                                            <td>{profissional.email}</td>
                                            <td>{profissional.cpf}</td>
                                            <td>{profissional.dataNascimento}</td>
                                            <td>{profissional.cidade}</td>
                                            <td>{profissional.estado}</td>
                                            <td>{profissional.pais}</td>
                                            <td>{profissional.rua}</td>
                                            <td>{profissional.numero}</td>
                                            <td>{profissional.bairro}</td>
                                            <td>{profissional.cep}</td>
                                            <td>{profissional.salario}</td>
                                           
                                           
                                           
                                            <td className='d-grid gap-1 col-4 '>
                                            <div className='col-1'>
                                                <Link to={"/editarprofissional/" + profissional.id } className='btt btn-primary btn-sm'>Editar</Link>
                                                </div>
                                               <div className='col-1'>
                                                <button onClick={() => excluir(profissional.id)} className='btt btn-white btn-sm'>Excluir</button>
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

export default ListagemProfissional;