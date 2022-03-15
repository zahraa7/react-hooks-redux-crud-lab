import React, { useState } from "react";

function RestaurantInput({ onAddRestaurant }) {
  const [name, setName] = useState(``);
  function submitHandler(e) {
    e.preventDefault();
    onAddRestaurant(name);
    setName(``);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
          />
        </label>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantInput;