import { useState } from "react";

function ReviewInput({ restaurantId, onFormSubmit }) {
  const [comment, setComment] = useState("");

  return (
    <div>
      Review Input
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onFormSubmit({ restaurantId, comment });
        }}
      >
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default ReviewInput;