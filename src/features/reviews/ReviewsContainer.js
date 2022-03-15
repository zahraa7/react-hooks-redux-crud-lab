import { useDispatch, useSelector } from "react-redux";
import { reviewAdded } from "./reviewsSlice";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({ restaurantId }) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.entities);

  const handleFormSubmit = (review) => {
    dispatch(reviewAdded(review));
  };
  return (
    <div>
      <ReviewInput
        restaurantId={restaurantId}
        onFormSubmit={handleFormSubmit}
      />
      <Reviews
        reviews={reviews.filter(
          (review) => review.restaurantId === restaurantId,
        )}
      />
    </div>
  );
}

export default ReviewsContainer;