import {Link} from 'react-router-dom';

function MovieCard({title, movie_Id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <Link to={`/movie/${movie_Id}`}>View Info</Link>
    </article>
  );
};

export default MovieCard;