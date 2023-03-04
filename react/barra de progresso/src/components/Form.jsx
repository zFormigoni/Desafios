import InputForm from './InputForm';
import SelectForm from './SelectForm';
import GenreForm from './GenreForm';

const Form = ({ data, onchange, form }) => {
    const Testeinputs = [
        [
            {
                type: 'InputForm',
                titulo: 'Nome',
                inputName: 'name',
                data: data.name,
            },
            {
                type: 'InputForm',
                titulo: 'Sobrenome',
                inputName: 'surname',
                data: data.surname,
            },
            {
                type: 'InputForm',
                titulo: 'Nome Completo',
                inputName: 'fullName',
                data: data.fullName,
            },
            {
                type: 'InputForm',
                titulo: 'E-mail',
                inputName: 'email',
                data: data.email,
            },
            {
                type: 'SelectForm',
                titulo: 'Estado Civil',
                inputName: 'matrialStatus',
                data: data.matrialStatus,
            },
            {
                type: 'GenreForm',
                titulo: 'Gênero',
                data: data.genre,
            },
        ],
        [
            {
                type: 'InputForm',
                titulo: 'Nome Completo',
                inputName: 'fullName',
                data: data.fullName,
            },
            {
                type: 'InputForm',
                titulo: 'E-mail',
                inputName: 'email',
                data: data.email,
            },
            {
                type: 'SelectForm',
                titulo: 'Estado Civil',
                inputName: 'matrialStatus',
                data: data.matrialStatus,
            },
            {
                type: 'GenreForm',
                titulo: 'Gênero',
                data: data.genre,
            },
        ],
    ];

    var inputs = [];
    form == 0 ? (inputs = Testeinputs[1]) : (inputs = Testeinputs[0]);
    return (
        <>
            {inputs.map((input) => {
                if (input.type == 'InputForm') {
                    return (
                        <InputForm
                            key={'InputForm' + input.titulo}
                            titulo={input.titulo}
                            inputName={input.inputName}
                            data={input.data}
                            onchange={onchange}
                        />
                    );
                }
                if (input.type == 'SelectForm') {
                    return (
                        <SelectForm
                            key={'SelectForm' + input.titulo}
                            titulo={input.titulo}
                            inputName={input.inputName}
                            data={input.data}
                            onchange={onchange}
                        />
                    );
                }
                if (input.type == 'GenreForm') {
                    return (
                        <GenreForm
                            key={'GenreForm' + input.titulo}
                            titulo={input.titulo}
                            data={input.data}
                            onchange={onchange}
                        />
                    );
                }
            })}
        </>
    );
};

export default Form;
