import React from "react";
import Review from "./Review";

function Reviews({ reviews, onDeleteClick }) {
  return (
    <ul>
      Reviews
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default Reviews;