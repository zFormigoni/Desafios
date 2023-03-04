import { useState } from 'react';
import InputForm from './components/InputForm';
import SelectForm from './components/SelectForm';
import GenreForm from './components/GenreForm';

function App() {
    const [data, setData] = useState({
        fullName: '',
        email: '',
        matrialStatus: '',
        genre: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => {
            const newData = { ...prev, [name]: value };
            return newData;
        });
    };

    const calculateProgressBar = () => {
        let value = 0;
        let amontToAdd = 100 / Object.keys(data).length;

        if (data.fullName) {
            const expldeString = data.fullName.split(' ');
            expldeString[1] ? (value += amontToAdd) : null;
        }
        if (data.email) {
            const pattern =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            pattern.test(data.email) ? (value += amontToAdd) : null;
        }
        if (data.matrialStatus) {
            value += amontToAdd;
        }
        if (data.genre) {
            value += amontToAdd;
        }
        return value;
    };

    const handleClick = () => {
        alert('enviado');
        setData({
            fullName: '',
            email: '',
            matrialStatus: '',
            genre: '',
        });
    };

    return (
        <div className="App">
            <h3>desafio fernandev</h3>
            <h1>progresso do formulário</h1>

            <main>
                <div className="bar-container">
                    <div
                        className="bar"
                        style={{ width: `${calculateProgressBar()}%` }}
                    ></div>
                </div>

                <InputForm
                    titulo="Nome Completo"
                    inputName="fullName"
                    data={data.fullName}
                    onchange={handleChange}
                />

                <InputForm
                    titulo="E-mail"
                    inputName="email"
                    data={data.email}
                    onchange={handleChange}
                />

                <SelectForm
                    titulo={'Estado Civil'}
                    inputName={'matrialStatus'}
                    data={data.matrialStatus}
                    onchange={handleChange}
                />

                <GenreForm
                    titulo={'Gênero'}
                    data={data.genre}
                    onchange={handleChange}
                />

                <button
                    onClick={handleClick}
                    disabled={calculateProgressBar() !== 100}
                >
                    Enviar Formulário
                </button>
            </main>
        </div>
    );
}

export default App;
