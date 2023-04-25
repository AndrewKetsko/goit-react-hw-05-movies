import { useRef, Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const location = useLocation();
  const { movieID } = useParams();
  const locationLink = useRef(location.state?.from ?? '/movies');
  const [details, setDetails] = useState({});
  //useeffect for moviedetails
  // console.log(location.state?.from);
  // console.log(movieID);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=cb1bcc244723619ea7f2217b5a84ccd8`;
        const response = await axios.get(url);
        setDetails(response.data);
      } catch (error) {
        console.error('Error:');
      }
    };
    fetch();
  }, [movieID]);
  return (
    <>
      <Link to={locationLink.current}>V--- Back to previous page</Link>
      <div>
        <img
          alt={details.title}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          width="240"
          height="357"
        ></img>
        <h2>{details.title}</h2>
        <p>User score: {details.vote_average * 10}%</p>
        <p>Overview</p>
        <p>{details.overview}</p>
        <p>Genres</p>
          <ul>
            {details.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
