import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/directors")
      .then(r => r.json())
      .then(data => setDirectors(data))
      .catch(error => console.error(error));
  }, []);

  const directorsInfo = directors.map((director) => {
    return <article key={director.id}>
        <h2>{director.name}</h2>
        {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </article>
  })

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        <ul>
          {directorsInfo}
        </ul>
      </main>
    </>
  );
};

export default Directors;
