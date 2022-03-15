import { useDispatch } from "react-redux";
import { reviewRemoved } from "./reviewsSlice";

function Review({ review }) {
  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(reviewRemoved(id));
  };
  return (
    <div>
      <li>
        {review.comment}
        <button onClick={() => handleDeleteClick(review.id)}>
          Delete Review
        </button>
      </li>
    </div>
  );
}

export default Review;