const InputForm = ({ titulo, inputName, data, onchange }) => {
    return (
        <div className="form-group">
            <label htmlFor="">{titulo}</label>
            <input name={inputName} value={data} onChange={onchange} />
        </div>
    );
};

export default InputForm;
