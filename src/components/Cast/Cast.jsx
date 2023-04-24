import { useParams } from 'react-router';

const Cast = () => {
  const { movieID } = useParams();
  return <div>Film cast gallery {movieID}</div>;
};

export default Cast;
