import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {
  /* revisamos todas las posiciones ganadoras para ver si X o O gano */
  for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo 
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]    // retorna 'X' o 'O'
      }
    }
    // si no hay ganador
    return null
}

export const checkDraw = (newBoard) => {
  // Revisamos si hay un empate, si no hay mas espacios vacios en el tablero
  // every() verifica si en el array 'newBoard' todos los valores de las square son diferentes a null
  return newBoard.every((square) => square !== null)
}