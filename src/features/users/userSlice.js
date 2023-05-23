import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    get_users_success: (state, action) => {
      state.items = action.payload.items;
    },
    user_error: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

// Action creators are generated for each case reducer function
export const { get_users_success, user_error } = usersSlice.actions;

export default usersSlice.reducer;
