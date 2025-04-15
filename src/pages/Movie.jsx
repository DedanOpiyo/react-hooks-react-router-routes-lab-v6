import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movieInfo, setMovieInfo] = useState({});//
  const params = useParams()
  const movieId = params.id;
  console.log(movieInfo)
  console.log(movieId)

  useEffect(() => {
    console.log("Component mounted");
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then((res) => res.json())
    .then((data) => setMovieInfo(data))
  }, [movieId]);

  if(!movieInfo.title) {
    return <h1>Loading...</h1>
  } 

  //// const storeMovieGenres = movieInfo.genres;
  // const displayedMovieInfo = movieInfo.genres.map((genre, index) => {
  //   return <span key={index}>{genre}</span>
  //   // console.log('genre:', genre) 
  // })

  // console.log('storeMovieGenres:', storeMovieGenres) 
  // function displayedMovieInfo(movieInfo) 
  const genres = movieInfo.genres.map(genre => <span key={genre}>{genre}</span>)
  
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movieInfo.title}</h1>
        <p>{movieInfo.time}</p>
        {genres}
      </main>
    </>
  );
};

export default Movie;
