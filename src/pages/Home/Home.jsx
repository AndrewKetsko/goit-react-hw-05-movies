import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Card, Gallery, Image, Message } from './home.styled';

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
      <>
        {/* <h2>Trending movies</h2> */}
        <Gallery>
          {movieArray.map(movie => (
            <Card key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                <Image
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  width="120"
                  height="180"
                ></Image>
                <Message>{movie.title}</Message>
              </Link>
            </Card>
          ))}
        </Gallery>
      </>
    );
};

export default Home;
