import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../App.module.css';
import axios from 'axios';
import '../components/estilo.css';
import Swal from 'sweetalert2';

const CadastroAgenda = () => {

    const [horario_data, setData] = useState<string>("")
    const [profissional_id, setProfissonal] = useState<string>("")
    const [cliente_id, setCliente] = useState<string>("")
    const [tipo_pagamento, setPagamento] = useState<string>("")
    const [valor, setValor] = useState<string>("")
    const [servico_id, setServico] = useState<string>("")



    //useState = estado do componente

    const cadastrarUsuario = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            horario_data: horario_data,
            profissional_id: profissional_id,
            tipo_pagamento: tipo_pagamento,
            valor: valor,
            cliente_id: cliente_id,
            servico_id: servico_id
        
        }

        console.log(dados)
        axios.post('http://127.0.0.1:8000/api/agenda/store/',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                if(response.data.status === true){
                    Swal.fire({
                        title: "Cadastrado com Sucesso!",
                        text: "Agendamento cadastrado!",
                        icon: "success"
                      });
                      window.location.href = "/agenda/cliente/listagem"
                }
                console.log(response)
                
            }).catch(function (error) {
                console.log(error);
                console.log(dados);
            });
           

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        
        if (e.target.name === "horario_data") {
            setData(e.target.value);
        }

        if (e.target.name === "profissional_id") {
            setProfissonal(e.target.value);
        }

        if (e.target.name === "tipo_pagamento") {
            setPagamento(e.target.value);
        }

        if (e.target.name === "valor") {
            setValor(e.target.value);
        }

        if (e.target.name === "cliente_id") {
            setCliente(e.target.value);
        }

        if (e.target.name === "servico_id") {
            setServico(e.target.value);
        }
       
    }
   

            
        return (
            <div>
                <Header />
                <main className={styles.main}>
                    <div className='container'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Agendamento</h5>
                                <form onSubmit={cadastrarUsuario} className='row g-3'>
                                    <div className='col-6'>
                                        <label htmlFor="profissional_id" className='form-label'>Profissional</label>
                                        <input type="text" name="profissional_id" className='form-control' required onChange={handleState} />

                                    </div>

                                    <div className='col-6'>
                                        <label htmlFor="cliente_id" className='form-label'>Cliente</label>
                                        <input type="text" name='cliente_id' className='form-control' required onChange={handleState} />

                                    </div>

        

                                    <div className='col-6'>
                                        <label htmlFor="horario_data" className='form-label'>Data e Horario</label>
                                        <input type="datetime-local" name='horario_data' className='form-control' required onChange={handleState} />

                                    </div>

                                    <div className='col-6'>
                                        <label htmlFor="servico_id" className='form-label'>Serviço</label>
                                        <input type="text" name='servico_id' className='form-control' required onChange={handleState} />

                                    </div>

                                    <div className='col-6'>
                                        <label htmlFor="valor" className='form-label'>Valor</label>
                                        <input type="text" name='valor' className='form-control' required onChange={handleState} />

                                    </div>

                                    <div className='col-6'>
                                        <label htmlFor="tipo_pagamento" className='form-label'>Tipo De Pagamento</label>
                                        <input type="text" name='tipo_pagamento' className='form-control' required onChange={handleState} />

                                    </div>


                                    

                                    <div className='col-15'>
                                        <button className='btn' type='submit'> Cadastrar
                                        </button>
                                    </div>

                                    
                                </form>


                            </div>
                        </div>


                    </div>

                </main>
                <Footer />

            </div>
        );
    }

    export default CadastroAgenda;