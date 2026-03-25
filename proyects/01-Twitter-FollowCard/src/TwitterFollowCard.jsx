import { useState } from "react"

/* 
   children
   Es todo lo que envuelve la etiqueta TwitterFollowCard en App.jsx
*/
export function TwitterFollowCard({ userName, children, initialIsFollowing }) {
   const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

   /* estas 3 lineas son equivalentes a la de arriba 
      const state = useState(false)
      const isFollowing = state[0]
      const setIsFollowing = state[1]
   */

   const text = isFollowing ? "Siguiendo" : "Seguir"
   const buttonClassName = isFollowing
      ? "tw-followCard-button is-following" /* esto es el className y cambia dependiendo del valor isFollowing */
      : "tw-followCard-button"

   const handleClick = () => {
      setIsFollowing(!isFollowing)
   }

   return (
      <article className="tw-followCard">
         <header className="tw-followCard-header">
            <img
               className="tw-followCard-avatar"
               alt={`avatar de ${userName}`}
               src={`https://unavatar.io/x/${userName}`}
            />
            <div className="tw-followCard-info">
               <strong> {children} </strong>
               <span className="tw-followCard-infoUser"> @{userName} </span>
            </div>
         </header>

         <aside>
            <button className={buttonClassName} onClick={handleClick}>
               <span className="tw-followCard-text"> {text} </span>
               <span className="tw-followCard-unfollow">Dejar de seguir</span>
            </button>
         </aside>
      </article>
   )
}
