import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css';
import axios from 'axios';
import '../components/estilo.css';

const Cadastro = () => {

    const [id, setId] = useState<string>("")
    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [nomeErro, setNomeErro] = useState<string>("");
    const [celularErro, setCelularErro] = useState<string>("");
    const [emailErro, setEmailErro] = useState<string>("");
    const [cpfErro, setCpfErro] = useState<string>("");
    const [datanascimentoErro, setDataNascimentoErro] = useState<string>("");
    const [cidadeErro, setCidadeErro] = useState<string>("");
    const [estadoErro, setEstadoErro] = useState<string>("");
    const [paisErro, setPaisErro] = useState<string>("");
    const [ruaErro, setRuaErro] = useState<string>("");
    const [numeroErro, setNumeroErro] = useState<string>("");
    const [bairroErro, setBairroErro] = useState<string>("");
    const [cepErro, setCepErro] = useState<string>("");
    const [complementoErro, setComplementoErro] = useState<string>("");
    const [senhaErro, setSenhaErro] = useState<string>("");


    const cadastrarUsuario = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            celular: celular,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            senha: password
        }
        console.log(dados)
        axios.post('http://127.0.0.1:8000/api/cliente/store',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                if (response.data.sucess === false) {


                    if ('nome' in response.data.error) {
                        setNomeErro(response.data.error.nome)
                    }
                    if ('celular' in response.data.error) {
                        setCelularErro(response.data.error.celular)
                    }
                        if ('email' in response.data.error) {
                            setEmailErro(response.data.error.email)
                        }
                        if ('cpf' in response.data.error) {
                            setCpfErro(response.data.error.cpf)
                        }
                        if ('dataNascimento' in response.data.error) {
                            setDataNascimentoErro(response.data.error.dataNascimento)
                        }
                        if ('cidade' in response.data.error) {
                            setCidadeErro(response.data.error.cidade)
                        }
                        if ('estado' in response.data.error) {
                            setEstadoErro(response.data.error.estado)
                        }
                    
                } else {
                    window.location.href = "/listagem"
                }
            }).catch(function (error) {
                console.log(error);
            })

    }

    const findCep = (e: FormEvent) => {
        e.preventDefault();

        fetch('https://viacep.com.br/ws/' + cep + '/json/', {
            method: 'GET'
        }).then(response => response.json())
            .then(
                data => {
                    setCidade(data.localidade);

                    setEstado(data.uf);

                }
            ).catch(error => { console.log("Pesquisa Inválida") });

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "id") {
            setNome(e.target.value);
        }
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "celular") {
            setCelular(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "cpf") {
            setCpf(e.target.value);
        }
        if (e.target.name === "dataNascimento") {
            setDataNascimento(e.target.value);
        }
        if (e.target.name === "cidade") {
            setCidade(e.target.value);
        }
        if (e.target.name === "estado") {
            setEstado(e.target.value);
        }
        if (e.target.name === "pais") {
            setPais(e.target.value);
        }
        if (e.target.name === "rua") {
            setRua(e.target.value);
        }
        if (e.target.name === "numero") {
            setNumero(e.target.value);
        }
        if (e.target.name === "bairro") {
            setBairro(e.target.value);
        }
        if (e.target.name === "cep") {
            setCep(e.target.value);
        }
        if (e.target.name === "complemento") {
            setComplemento(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }



    }
    return (
        <div>
            <Header />
            <main className={styles.main}>

                <div className='container'></div>
                <div className='card'> </div>
                <div className='card-body'> </div>
                <h5 className='card-title'>Cadastrar Cliente</h5>
                <form onSubmit={cadastrarUsuario} className='row g-3'>
                    <div className='col-6'>
                        <label htmlFor='nome' className='form-label'>Nome</label>
                        <input type='text'
                            name='nome'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{nomeErro}</div>
                    </div>
                    <div className='col-6'>
                        <label htmlFor='celular' className='form-label'>Celular</label>
                        <input type='text'
                            name='celular'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{celularErro}</div>
                    </div>
                    <div className='col-6'>
                        <label htmlFor='email' className='form-label'>E-mail</label>
                        <input type='text'
                            name='email'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{emailErro}</div>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='cpf' className='form-label'>CPF</label>
                        <input type='text'
                            name='cpf'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{cpfErro}</div>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='dataNascimento' className='form-label'>Data de Nascimento</label>
                        <input type='date'
                            name='dataNascimento'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{datanascimentoErro}</div>
                    </div>


                    <div className='col-6'>
                        <label htmlFor="cep" className='form-label'>CEP</label>
                        <input type="text" name='cep' onBlur={findCep} className='form-control' required onChange={handleState} />
                        <div className='text-danger'>{cepErro}</div>
                    </div>



                    <div className='col-6'>
                        <label htmlFor="cidade" className='form-label'>Cidade</label>
                        <input type="text" name='cidade' value={cidade} className='form-control' required onChange={handleState} />
                        <div className='text-danger'>{cidadeErro}</div>
                    </div>

                    <div className='col-6'>
                        <label htmlFor="estado" className='form-label'>Estado</label>
                        <input type="text" name='estado' value={estado} className='form-control' required onChange={handleState} />
                        <div className='text-danger'>{estadoErro}</div>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='pais' className='form-label'>Pais</label>
                        <input type='text'
                            name='pais'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{paisErro}</div>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='rua' className='form-label'>Rua</label>
                        <input type='text'
                            name='rua'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{ruaErro}</div>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='numero' className='form-label'>Numero</label>
                        <input type='text'
                            name='numero'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{numeroErro}</div>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='bairro' className='form-label'>Bairro</label>
                        <input type='text'
                            name='bairro'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{bairroErro}</div>
                    </div>


                    <div className='col-6'>
                        <label htmlFor='complemento' className='form-label'>Complemento</label>
                        <input type='text'
                            name='complemento'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{complementoErro}</div>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='password' className='form-label'>Senha</label>
                        <input type='text'
                            name='password'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        <div className='text-danger'>{senhaErro}</div>
                    </div>

                    <div className='col-15'>
                        <button className='btt' type='submit'> Cadastrar
                        </button>
                    </div>

                </form>
            </main>
            <Footer />
        </div>
    );

}

export default Cadastro;