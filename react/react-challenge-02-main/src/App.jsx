import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
//* todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
//* todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
//* todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
//* todo - Desabilite o botão de Login equanto você está executando o login.
//* todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [requesting, setRequesting] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrorMessage('');
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrorMessage('');
    };
    const handleSubmited = () => {
        setRequesting(true);
        setErrorMessage('Carregando...');

        const values = { email: email, password: password };
        login(values)
            .then(() => {
                setErrorMessage('');
                alert('login executado');
            })
            .catch((e) => {
                setErrorMessage(e.message);
            })
            .finally(() => setRequesting(false));
    };

    return (
        <div className="wrapper">
            <div className="login-form">
                <h1>Login Form </h1>
                <div className="errorMessage">{errorMessage}</div>
                <div className="row">
                    <label htmlFor={'email'}>Email</label>
                    <input
                        id={'email'}
                        type={'email'}
                        autoComplete="off"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className="row">
                    <label htmlFor={'password'}>Password</label>
                    <input
                        id={'password'}
                        type={'password'}
                        value={password}
                        onChange={handlePassword}
                    />
                </div>

                <div className="button">
                    <button
                        disabled={
                            email == '' || password.length < 6 || !!requesting
                        }
                        onClick={handleSubmited}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
