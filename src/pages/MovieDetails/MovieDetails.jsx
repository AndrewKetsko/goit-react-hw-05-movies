import { useRef, Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Image, Title, Wrapper, Headers, GenresList, AdInfo, StyledLink } from './details.styled';

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
      <StyledLink to={locationLink.current}>
      Back to previous page
      </StyledLink>
      <Wrapper>
        <Image
          alt={details.title}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        ></Image>
        <div>
          <Title>{details.title}</Title>
          <Headers>User score: {details.vote_average * 10}%</Headers>
          <Headers>Overview</Headers>
          <p>{details.overview}</p>
          <Headers>Genres</Headers>
          <GenresList>
            {details.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        </div>
      </Wrapper>
      {/* <Title>Additional information</Title> */}
      <AdInfo>
        <li>
          <Headers>
            <Link to="cast">cast</Link>
          </Headers>
        </li>
        <li>
          <Headers>
            <Link to="reviews">reviews</Link>
          </Headers>
        </li>
      </AdInfo>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
