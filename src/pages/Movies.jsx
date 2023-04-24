import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie1',
    'movie2',
    'movie3',
    'movie4',
    'movie5',
    'movie6',
    'movie7',
    'movie8',
    'movie9',
    'movie10',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieID = searchParams.get('movieID') ?? '';
  const filteredMovies = movieID
    ? movies.filter(film => film.includes(movieID))
    : movies;

  const updateQueryString = e => {
    const nextParams = e.target.value !== '' ? { movieID: e.target.value } : {};
    setSearchParams(nextParams);
  };
  //usestate
  //useeffect for fetch
  return (
    //state for map
    <>
      <div>MoviesListPage</div>
      <input type="text" value={movieID} onChange={updateQueryString} />
      <ul>
        {' '}
        {filteredMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
