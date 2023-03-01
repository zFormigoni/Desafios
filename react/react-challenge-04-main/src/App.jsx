import { useEffect, useState } from 'react';
import './styles.scss';

/*
  DESAFIO TÉCNICO - JOGO DA VELHA - por fernandev

  * descrição
    desenvolva um jogo da velha (tic tac toe) funcional.
    use qualquer técnica de estilização preferida: css modules, sass, styled.

  * tasks
    ? - crie um board de 3x3
    ? - dois jogadores
    ? - ao clicar em um quadrado, preencher com a jogada
    ? - avisar quando o jogo finalizar, caso dê velha avise também
    ? - fazer um risco na sequência vencedora, caso houver
*/
const winningCondictions = [
    { indexes: [0, 1, 2], orientation: 'horizontal' },
    { indexes: [3, 4, 5], orientation: 'horizontal' },
    { indexes: [6, 7, 8], orientation: 'horizontal' },
    { indexes: [0, 3, 6], orientation: 'vertical' },
    { indexes: [1, 4, 7], orientation: 'vertical' },
    { indexes: [2, 5, 8], orientation: 'vertical' },
    { indexes: [0, 4, 8], orientation: 'diagonal-1' },
    { indexes: [2, 4, 6], orientation: 'diagonal-2' },
];

function App() {
    const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [turn, setTurn] = useState(1);
    const [winnigCombo, setWinnigCombo] = useState(null);

    const handleClick = (clickIndex) => {
        if (gameData[clickIndex] != 0) {
            return;
        }
        if (winnigCombo) {
            return;
        }
        setGameData((prev) => {
            const newGameData = [...prev];
            newGameData[clickIndex] = turn;
            return newGameData;
        });

        setTurn((prev) => (prev == 1 ? 2 : 1));
    };

    useEffect(() => {
        checkWinner();
        checkGameEnded();
    }, [gameData]);

    useEffect(() => {
        if (winnigCombo) {
            console.log('jogo finalizado');
        }
    });

    const checkGameEnded = () => {
        if (gameData.every((item) => item != 0)) {
            console.log('deu velha');
        }
    };

    const checkWinner = () => {
        let winner = null;
        for (let combination of winningCondictions) {
            const { indexes } = combination;
            if (
                gameData[indexes[0]] == 1 &&
                gameData[indexes[1]] == 1 &&
                gameData[indexes[2]] == 1
            ) {
                winner = 'player 1 ❌';
            }
            if (
                gameData[indexes[0]] == 2 &&
                gameData[indexes[1]] == 2 &&
                gameData[indexes[2]] == 2
            ) {
                winner = 'player 2 ⭕';
            }
            if (winner) {
                setWinnigCombo(combination);
                break;
            }
        }
        console.log({ winner });
    };

    return (
        <>
            <div className="board-game">
                {gameData.map((value, index) => (
                    <span
                        key={index}
                        className={
                            winnigCombo?.indexes.includes(index)
                                ? winnigCombo.orientation
                                : null
                        }
                        onClick={() => handleClick(index)}
                    >
                        <abbr title="">{index}</abbr>
                        {value == 1 && '❌'}
                        {value == 2 && '⭕'}
                    </span>
                ))}
            </div>
        </>
    );
}

export default App;
