import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkDraw} from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js"

/* 
  Los estados o hooks son inicializados se ejecutan al refrescar o entrar por una vez a la pagina
  DATO los estados nunca deben estar dentro de condicionales ni loops 
*/

export default function App() {
  /* 
    board se actualiza pq react re renderiza el app al cambiar de estado y toma el estado de la variable que 
    acompañe al set ('setBoard' 'setTurn')
  */
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  /* Null no hay ganador, false empate, true ganador */
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    /* 
      No actualizamos esta posicion si ya tiene algo
      Si el if se cumple es true y sale... o si hay un ganador
    */
    if(board[index] || winner) return

    /*
      No se usa el mismo board pq las props no se mutan.
      Actualiza el tablero
    */
    const newBoard = [...board]   // spread operator 
    newBoard[index] = turn        // turn sera 'X' o 'O'
    setBoard(newBoard)            // ESTADO ASINCRONO

    // Cambia el turno 
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X    // newTurn es 'X' o 'O'
    setTurn(newTurn)
   
    // revisa si hay ganador 
    const newWinner = checkWinnerFrom(newBoard) 
    if(newWinner) {
       /* Los estados en react con asincronos
          si esto fuese asincrono.. newWinner tendria un valor y no null
       */
      confetti()
      setWinner(newWinner) 
    } else if(checkDraw(newBoard)) {
      setWinner(false)
    }

    // guardar partida en local storage 
    /* saveGameToStorage({ board: newBoard, turn: newTurn}) */
  }

  /* Valores por defecto de la app */
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  useEffect(() => {
    // guardar partida 
    saveGameToStorage({ board: board, turn: turn })
  }, [board, turn])   // cuando se actualice el board y turno se guarda la partida

  return (
    <main className='board'> 
      <h1> Tic Tac Toe </h1>
      <button onClick={resetGame}> Reset del juego </button>
      <section className="game"> 

        {/* Componetizar este board */}
        {
          board.map((square, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        {/* 
          Se evalua la expresion dentro de isSelected y el resultado se envia a square 'true' o 'false'
        */}
        <Square isSelected={turn === TURNS.X}> 
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}> 
          {TURNS.O} 
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}