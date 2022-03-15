import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
  },
  reducers: {
    restaurantAdded(state, action) {
      state.entities.push({ id: uuid(), name: action.payload });
    },
    restaurantRemoved(state, action) {
      const index = state.entities.findIndex(
        (index) => index.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
  },
});

export default restaurantsSlice.reducer;
export const { restaurantAdded, restaurantRemoved } = restaurantsSlice.actions;