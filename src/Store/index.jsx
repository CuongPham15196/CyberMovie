import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "Reducer";

export default configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
