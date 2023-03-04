const SelectForm = ({ titulo, inputName, data, onchange }) => {
    const options = [
        { value: '', text: '- selecione...' },
        { value: 'solteiro', text: 'Solteiro' },
        { value: 'casado', text: 'Casado' },
        { value: 'divorciado', text: 'Divorciado' },
    ];

    return (
        <div className="form-group">
            <label htmlFor="">{titulo}</label>
            <select name={inputName} value={data} onChange={onchange}>
                {options.map((item) => {
                    return <option value={item.value}>{item.text}</option>;
                })}
            </select>
        </div>
    );
};

export default SelectForm;
