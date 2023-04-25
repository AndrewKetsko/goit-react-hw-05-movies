import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movieArray, setMovieArray] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      try {
        const url =
          'https://api.themoviedb.org/3/trending/movie/day?api_key=cb1bcc244723619ea7f2217b5a84ccd8';
        const response = await axios.get(url);
        setMovieArray(response.data.results);
      } catch (error) {
        console.error('Error:');
      }
    };
    fetch();
  }, []);

    return (
      <><h2>Trending movies</h2><ul>
            {movieArray.map(movie => (
                <li key={movie.id}>
                    <Link to={`movies/${movie.id}`} state={{ from: location }}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul></>
  );
};

export default Home;
