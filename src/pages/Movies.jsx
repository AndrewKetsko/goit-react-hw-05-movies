import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Gallery, Image, Message } from './Home/home.styled';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  // const filteredMovies = movieID
  //   ? movies.filter(film => film.includes(movieID))
  //   : movies;

  // const updateQueryString = e => {
  //   const nextParams = e.target.value !== '' ? { movieID: e.target.value } : {};
  //   setSearchParams(nextParams);
  // };

  useEffect(() => {
        if (!search) {
          return;
    }
    setSearchParams({ query: search });
      const fetch = async () => {
        try {
          const url =
            `https://api.themoviedb.org/3/search/movie?api_key=cb1bcc244723619ea7f2217b5a84ccd8&query=${search}`;
          const response = await axios.get(url);
          setMovies(response.data.results);
        } catch (error) {
          console.error('Error:');
        }
      };
      fetch();
  },[search, setSearchParams]) 
  
  return (
    //state for map
    <>
      <Searchbar search={search} setSearch={setSearch}></Searchbar>
      {/* <input type="text" value={movieID} onChange={updateQueryString} /> */}
      <Gallery>
        {movies.map(movie => (
          <Card key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <Image
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                width="120"
                height="180"
              ></Image>
              <Message>{movie.title}</Message>{' '}
            </Link>
          </Card>
        ))}
      </Gallery>
    </>
  );
};

export default Movies;
