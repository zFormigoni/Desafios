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
            ? setTotalDesconto((total - (total / 100) * 10).toFixed(2))
            : cupom == '20%'
            ? setTotalDesconto((total - (total / 100) * 20).toFixed(2))
            : cupom == '50%'
            ? setTotalDesconto((total - (total / 100) * 50).toFixed(2))
            : setTotalDesconto(total);
    };

    useEffect(() => {
        addCupom(cupom);
    });

    return (
        <>
            <div className="box">
                <header>Resumo da compra</header>
                <div className="info">
                    <div>
                        <span>Sub-total</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Frete</span>
                    </div>
                    <input type="text" />
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
                        {totalDesconto == 0 ? total.toFixed(2) : totalDesconto}
                    </span>
                </footer>
            </div>
            <button>Finalizar Compra</button>
        </>
    );
};

export default Summary;
