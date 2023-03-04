import { useEffect, useState } from 'react';

const cupons = [
    { cupom: 'vitor1', discount: '10%' },
    { cupom: 'vitor2', discount: '20%' },
    { cupom: 'vitor5', discount: '50%' },
];

const Summary = ({ total }) => {
    const [cupom, setCupom] = useState('');
    const [totalDesconto, setTotalDesconto] = useState(0);

    const checkCupon = (e) => {
        setTotalDesconto(total);
        let inputDiscount = e.target.value;

        for (let item of cupons) {
            if (inputDiscount == item.cupom) {
                return item.discount;
            }
        }
    };

    const addCupom = (cupom) => {
        cupom == '10%'
            ? setTotalDesconto(total - (total / 100) * 10)
            : cupom == '20%'
            ? setTotalDesconto(total - (total / 100) * 20)
            : cupom == '50%'
            ? setTotalDesconto(total - (total / 100) * 50)
            : setTotalDesconto(total);
    };

    useEffect(() => {
        addCupom(cupom);
    });

    const options = [
        { value: '', text: '... selecione...' },
        { value: 'sp', text: 'São Paulo' },
        { value: 'rj', text: 'Rio de Janeiro' },
        { value: 'mg', text: 'Minas gerais' },
    ];

    const [frete, setFrete] = useState(0);

    const calcFrete = (e) => {
        if (e == 'mg') {
            setFrete(30);
        }
        if (e == 'rj') {
            setFrete(20);
        }
        if (e == 'sp') {
            setFrete(10);
        }
    };

    return (
        <>
            <div className="box">
                <header>Resumo da compra</header>
                <div className="info">
                    <div>
                        <span>Sub-total</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">{'Frete'}</label>
                        <select
                            name={'frete'}
                            onChange={(e) => {
                                calcFrete(e.target.value);
                            }}
                        >
                            {options.map((option) => {
                                return (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.text}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div>
                        <button onClick={() => addCupom(cupom)}>
                            Adicionar cupom de desconto
                        </button>
                    </div>
                    <input
                        type="text"
                        onChange={(e) => {
                            setCupom(checkCupon(e));
                        }}
                    />
                </div>
                <footer>
                    <span>Total</span>
                    <span>
                        R$
                        {totalDesconto == 0
                            ? (total + frete).toFixed(2)
                            : (totalDesconto + frete).toFixed(2)}
                    </span>
                </footer>
            </div>
            <button>Finalizar Compra</button>
        </>
    );
};

export default Summary;
