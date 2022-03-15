import React from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { restaurantAdded } from "./restaurantsSlice";
import { useSelector, useDispatch } from "react-redux";
function RestaurantsContainer() {
  const restaurants = useSelector((state) => state.restaurants.entities);
  const dispatch = useDispatch();

  function submitHandler(name) {
    dispatch(restaurantAdded(name));
  }

  return (
    <div>
      <RestaurantInput onAddRestaurant={submitHandler} />

      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;