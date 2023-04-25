import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=cb1bcc244723619ea7f2217b5a84ccd8`;
        const response = await axios.get(url);
        // console.log(response.data.results);
        setReviews(response.data.results);
      } catch (error) {
        console.error('Error:');
      }
    };
    fetch();
  }, [movieID]);

  return (
    <ul>
      {reviews.map(review => <li key={review.id}>
      <p>Author: {review.author}</p>
            <p>{review.content}</p>
      </li>)}
    </ul>
  );
};

export default Reviews;
