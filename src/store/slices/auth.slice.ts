//#region > Imports
//> Redux Toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//#endregion

//#region > Types
interface IItemObject {
  slug: string;
  origin?: string;
}

interface IErrorObject extends IItemObject {
  statusCode?: number;
  message?: string;
  payload?: any;
}

interface IAuthObject {
  email: string;
  password: string;
}

interface InitialState {
  loading: IItemObject[] | [];
  success: IItemObject[] | [];
  errors: IErrorObject[] | [];
  currentUser: {} | null;
}
//#endregion

//#region > Config
const INITIAL_STATE: InitialState = {
  currentUser: null,
  loading: [],
  success: [],
  errors: [],
};
//#endregion

//#region > Functions
export const loginUser = createAsyncThunk<any, IAuthObject>(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      // TODO: Implement login
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    // Login user
    builder.addCase(loginUser.pending, (state, action: any) => {
      state = {
        ...state,
        loading: [
          ...state.loading,
          {
            slug: "loginUser",
            origin: action?.meta?.arg?.origin,
          },
        ],
      };
    });
    builder.addCase(loginUser.fulfilled, (state, action: any) => {
      state = {
        ...state,
        loading: state.loading.filter((item) => item.slug !== "loginUser"),
        success: [
          ...state.success,
          {
            slug: "loginUser",
            origin: action?.meta?.arg?.origin,
          },
        ],
      };
    });
    builder.addCase(loginUser.rejected, (state, action: any) => {
      state = {
        ...state,
        loading: state.loading.filter((item) => item.slug !== "loginUser"),
        errors: [
          ...state.errors,
          {
            slug: "loginUser",
            origin: action?.meta?.arg?.origin,
            statusCode: action?.payload?.statusCode,
            message: action?.payload?.message,
            payload: action?.payload?.payload,
          },
        ],
      };
    });
  },
});
//#endregion

//#region > Exports
// Actions
export const {} = authSlice.actions;
// Reducer
export default authSlice.reducer;
//#endregion
