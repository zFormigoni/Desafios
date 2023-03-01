import { useState } from 'react';

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
        let amontToAdd = 25;

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
                {/* crie a barra de progresso aqui */}
                <div className="form-group">
                    <label htmlFor="">Nome Completo</label>
                    <input
                        name="fullName"
                        value={data.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">E-mail</label>
                    <input
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Estado Civil</label>
                    <select
                        name="matrialStatus"
                        value={data.matrialStatus}
                        onChange={handleChange}
                    >
                        <option value="">- selecione...</option>
                        <option value="solteiro">Solteiro</option>
                        <option value="casado">Casado</option>
                        <option value="divorciado">Divorciado</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Gênero</label>
                    <div className="radios-container">
                        <span>
                            <input
                                type="radio"
                                name="genre"
                                value={'masculino'}
                                onChange={handleChange}
                                checked={data.genre === 'masculino'}
                            />{' '}
                            Masculino
                        </span>
                        <span>
                            <input
                                type="radio"
                                name="genre"
                                value={'feminino'}
                                onChange={handleChange}
                                checked={data.genre === 'feminino'}
                            />{' '}
                            Feminino
                        </span>
                    </div>
                </div>
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
