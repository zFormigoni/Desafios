import './styles.scss';

import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
/* import Summary from './Summary'; */
import Summary from './Summary';
import TableRow from './TableRow';
import { useEffect, useState } from 'react';
import { api } from './provider';
import CircularProgress from '@mui/material/CircularProgress';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const productObject = {
    name: '',
    category: '',
    price: randomNumber(1, 100),
    quantity: randomNumber(1, 5),
};

function App() {
    const [cart, setCart] = useState([]);

    const fetchData = (time) => {
        setShowCart(false);
        setShowLoading(true);
        api.get('/cart').then(({ data }) => {
            setCart(data);
        });
        setTimeout(() => {
            setShowLoading(false);
            setShowCart(true);
        }, time);
    };

    useEffect(() => {
        fetchData(3000);
    }, []);

    const createProduct = () => {
        const product = productObject;
        product.price = randomNumber(1, 100);
        product.quantity = randomNumber(1, 5);
        return product;
    };

    const handleAddItem = () => {
        api.post('/cart', createProduct()).then((response) => {
            fetchData(1000);
        });
    };

    const handleUpdateItem = (item, sign) => {
        var newQuantity = item.quantity;
        sign == '+'
            ? (newQuantity += 1)
            : newQuantity == 1
            ? (newQuantity = 1)
            : (newQuantity -= 1);

        const product = { ...item, quantity: newQuantity };
        delete product._id;

        api.put(`/cart/${item._id}`, product).then((response) => {
            fetchData(100);
        });
    };

    const handleRemoveItem = (item) => {
        api.delete(`/cart/${item}`).then((response) => {
            fetchData(1000);
        });
    };

    const handlePrices = () => {
        var total = 0;
        for (let item of cart) {
            total += item.quantity * item.price;
        }
        return total;
    };

    const total = handlePrices();

    const [showLoading, setShowLoading] = useState(false);
    const [showCart, setShowCart] = useState(false);

    return (
        <>
            <PageHeader />
            <main>
                <PageTitle data={'Seu carrinho'} />
                <div className="content">
                    <section>
                        <button
                            onClick={handleAddItem}
                            style={{
                                padding: '5px 10px',
                                marginBottom: '15px',
                            }}
                        >
                            Adicionar ao carrinho
                        </button>
                        <p>
                            <b>Cupons:</b> vitor1, vitor2, vitor5
                        </p>
                        {showLoading && (
                            <div
                                style={{
                                    width: '100%',
                                    marginTop: '100px',
                                    marginLeft: '-50px',
                                    position: 'absolute',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <CircularProgress />
                            </div>
                        )}
                        <table>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Pre??o</th>
                                    <th>Quantidade</th>
                                    <th>Total</th>
                                    <th>-</th>
                                </tr>
                            </thead>

                            <tbody>
                                {showCart &&
                                    cart.map((item) => (
                                        <TableRow
                                            key={item._id}
                                            data={item}
                                            handleRemoveItem={handleRemoveItem}
                                            handleUpdateItem={handleUpdateItem}
                                        />
                                    ))}
                                {cart.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={'5'}
                                            style={{
                                                textAlign: 'center',
                                            }}
                                        >
                                            <b>O carrinho esta vazio</b>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </section>

                    <aside>
                        <Summary total={total} />
                    </aside>
                </div>
            </main>
        </>
    );
}

export default App;
