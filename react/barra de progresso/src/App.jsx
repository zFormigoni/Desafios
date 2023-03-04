import { useState } from 'react';
import Form from './components/Form';

function App() {
    const datas = [
        {
            fullName: '',
            email: '',
            matrialStatus: '',
            genre: '',
        },
        {
            name: '',
            surname: '',
            fullName: '',
            email: '',
            matrialStatus: '',
            genre: '',
        },
    ];
    var form;
    var selectData;
    try {
        form = localStorage.getItem('form');
        form == 1 ? (selectData = datas[1]) : (selectData = datas[0]);
    } catch {
        form = localStorage.setItem('form', 1);
    }

    const [data, setData] = useState(selectData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => {
            const newData = { ...prev, [name]: value };
            return newData;
        });
    };

    const calculateProgressBar = () => {
        let value = 0;
        let amontToAdd = 100 / Object.keys(selectData).length;

        if (selectData === datas[1]) {
            data.name ? (value += amontToAdd) : null;
            data.surname ? (value += amontToAdd) : null;
        }

        if (data.fullName) {
            const expldeString = data.fullName.split(' ');
            expldeString[0] ? (value += amontToAdd) : null;
        }
        if (data.email) {
            const pattern =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            pattern.test(data.email) ? (value += amontToAdd) : null;
        }

        data.matrialStatus ? (value += amontToAdd) : null;
        data.genre ? (value += amontToAdd) : null;

        return Math.trunc(value);
    };

    const handleClick = () => {
        alert('enviado');
        setData(selectData);
    };

    const changeForm = () => {
        localStorage.getItem('form') == 1
            ? localStorage.setItem('form', 2)
            : localStorage.setItem('form', 1);

        window.location.reload(true);
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

                <Form
                    data={data}
                    onchange={handleChange}
                    form={selectData == datas[0] ? 0 : 1}
                />

                <button
                    className="btn-submit"
                    onClick={handleClick}
                    disabled={calculateProgressBar() !== 100}
                >
                    Enviar Formulário
                </button>
                <button className="btn-change" onClick={changeForm}>
                    Trocar formulario
                </button>
            </main>
        </div>
    );
}

export default App;
