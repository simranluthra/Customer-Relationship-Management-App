import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customer",
  initialState: { customers: [] },
  reducers: {
    setCustomer(state, action) {
      return {
        ...state,
        customers: action.payload,
      };
    },
  },
});

export const { setCustomer } = customerSlice.actions;
export default customerSlice.reducer;
