import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error));
  }, []);

  const actorssInfo = actors.map((actor) => {
    return <article key={actor.id}>
        <h2>{actor.name}</h2>
        {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </article>
  })

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        <ul>
          {actorssInfo}
        </ul>
      </main>
    </>
  );
};

export default Actors;
