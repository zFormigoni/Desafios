import { login } from './utils';
import './index.css';
import { useState } from 'react';

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
