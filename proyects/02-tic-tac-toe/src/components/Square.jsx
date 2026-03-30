export const Square = ({ children, isSelected, updateBoard, index }) => {
    /* este className es .square.is-selected en el css, isSelected sera true o false
       si es true tendra 'is-selected' sino nada ( no pinta de color )
    */
    const className =  `square ${isSelected ? 'is-selected' : '' }`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}  
      </div>
    )
}