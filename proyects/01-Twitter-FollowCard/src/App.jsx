import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {
   const users = [
      {
         userName: "midudev",
         name: "Miguel Angel",
         isfollowing: true
      },
      {
         userName: "elonmusk",
         name: "Elon Musk",
         isfollowing: false
      },
      {
         userName: "sirlkyre",
         name: "Sirl",
         isfollowing: true
      },
      {
         userName: "jesval68",
         name: "Jesus Valderrama",
         isfollowing: false
      }
   ]

   return (
      <section className="App">
         {users.map((user) => {
            const { userName, name, isfollowing } = user
            return (
               <TwitterFollowCard
                  key={userName} /* Usar key cuando renderizamos un array */
                  userName={userName}
                  initialIsFollowing={isfollowing}
               >
                  {name}
               </TwitterFollowCard>
            )
         })}
      </section>
   )
}
