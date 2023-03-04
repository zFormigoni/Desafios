const GenreForm = ({ titulo, data, onchange }) => {
    const genres = ['masculino', 'feminino'];

    return (
        <div className="form-group">
            <label htmlFor="">{titulo}</label>
            <div className="radios-container">
                {genres.map((genre) => {
                    return (
                        <span key={genre}>
                            <input
                                type="radio"
                                name="genre"
                                value={genre}
                                onChange={onchange}
                                checked={data === genre}
                            />{' '}
                            {genre}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default GenreForm;
