//#region > Imports
//> Logger (Remove in production)
import logger from "redux-logger";
//> Thunks
import thunk from "redux-thunk";
// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

//> Slices
import authSlice from "./slices/auth.slice";
//#endregion

//#region > Config
const middleware =
  process.env.REACT_APP_ENVIRONMENT !== "production"
    ? [logger, thunk]
    : [thunk];

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware,
});
//#endregion

//#region > Exports
export type RootState = ReturnType<typeof store.getState>;

export default store;
//#endregion
