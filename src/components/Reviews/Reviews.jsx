import { useParams } from "react-router";

const Reviews = () => {
  const { movieID } = useParams();
  return <div>Film reviews {movieID}</div>;
};

export default Reviews;
