import { useState } from 'react';
import Form from './components/Form';

function App() {
    const [data, setData] = useState({
        name: '',
        surname: '',
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

        data.name ? (value += amontToAdd) : null;
        data.surname ? (value += amontToAdd) : null;
        data.matrialStatus ? (value += amontToAdd) : null;
        data.genre ? (value += amontToAdd) : null;

        if (data.fullName) {
            const expldeString = data.fullName.split(' ');
            expldeString[0] ? (value += amontToAdd) : null;
        }
        if (data.email) {
            const pattern =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            pattern.test(data.email) ? (value += amontToAdd) : null;
        }

        return Math.trunc(value);
    };

    const handleClick = () => {
        alert('enviado');
        setData({
            name: '',
            surname: '',
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

                <Form data={data} onchange={handleChange} />

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
