import { useRef, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
    const { movieID } = useParams();
    const locationLink = useRef(location.state?.from ?? '/movies');
  //useeffect for moviedetails
    // console.log(location.state?.from);
    // console.log(locationLink);
  return (
    <>
      <Link to={locationLink.current}>V--- Back to previous page</Link>
      <div>MovieDetails {movieID}</div>
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
