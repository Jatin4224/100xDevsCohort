// import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "./reducers/counterSlice";
// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducers/counterSlice"; // ✅ import reducer
import UserReducer from "./reducers/UserReducer";
export const store = configureStore({
  reducer: {
    UserReducer: UserReducer, // ✅ use the reducer function
  },
});
