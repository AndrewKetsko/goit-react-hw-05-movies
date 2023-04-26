import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Card, Gallery, Image, Message } from 'pages/Home/home.styled';

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
    <Gallery>
      {cast.map(actor => (
        <Card key={actor.id}>
          <Image
            alt={actor.name}
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          ></Image>
          <Message>{actor.name}</Message>
          <Message>AS: {actor.character}</Message>
        </Card>
      ))}
    </Gallery>
  );
};

export default Cast;
