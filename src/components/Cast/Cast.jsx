import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=cb1bcc244723619ea7f2217b5a84ccd8`;
        const response = await axios.get(url);
        // console.log(response.data.cast);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error:');
      }
    };
    fetch();
  }, [movieID]);

  return (
    // {console.log(cast)}
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            alt={actor.name}
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            width="240"
            height="357"
          ></img>
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
