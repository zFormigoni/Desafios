const calculadora = document.querySelector('.calculator-buttons');

const botoes = [
    ['limparDisplay', 'CE'],
    ['limparCalculo', 'C'],
    ['backspace', '«'],
    ['operadorDividir', '/'],
    ['tecla7', '7'],
    ['tecla8', '8'],
    ['tecla9', '9'],
    ['operadorMultiplicar', '*'],
    ['tecla4', '4'],
    ['tecla5', '5'],
    ['tecla6', '6'],
    ['operadorSubtrair', '-'],
    ['tecla1', '1'],
    ['tecla2', '2'],
    ['tecla3', '3'],
    ['operadorAdicionar', '+'],
    ['inverter', '±'],
    ['tecla0', '0'],
    ['decimal', ','],
    ['igual', '='],
];

const createElement = (tag, tagParameter, text) => {
    const element = document.createElement(tag);
    element.id = tagParameter;
    element.textContent = text;
    return element;
};

const createBtn = (lista) => {
    const listaBtns = [];
    lista.forEach((item) => {
        btn = createElement('button', item[0], item[1]);
        calculadora.appendChild(btn);
    });
    return listaBtns;
};

window.onload = createBtn(botoes);
