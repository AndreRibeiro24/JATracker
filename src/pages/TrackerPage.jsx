import { useContext } from "react";
import { UserData } from "../context/Context";
import { Link } from "react-router-dom";

const sections = [
     {label: "Currently", status: "playing"},
     {label: "Already Played", status: "played"},
     {label: "Want to play", status: "want"},
    ];

export default function TrackerPage() {
    const {trackerList, removeFromTracker} = useContext(UserData);
    
  return (
    <main>
        <h1> Your Games Tracked</h1>


    {sections.map(({label,status})=>{
        const games = trackerList.filter((g)=> g.status === status);

        return (
            <section key={status}>
            <aside>
            <div><h2>{label}</h2> <span>({games.length})</span>
            </div></aside>

            {games.length === 0 ?(
                <p> No games here yet</p>
            ) : (
                <div>
                    {games.map((game)=>(
                        <article key={game.id}>
                            <Link to={`/game-detail/${game.id}`}>
                            <div style={{ backgroundImage: `url(${game.background_image})`}}/>
                            <h3>{game.name}</h3>
                            </Link>

                            <button onClick={()=> removeFromTracker(game)}>
                                X
                            </button>
                        </article>
                    ))}
                </div>
            )}
            </section>
        );
    })}
    </main>
  )
}
