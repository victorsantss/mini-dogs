import createAsyncSlice from "./helper/createAsyncSlice";

const theme = createAsyncSlice({
  name: "theme",
  initialState: {
    darkTheme: false,
  },
  reducers: {
    setTheme(state) {
      state.darkTheme = !state.darkTheme;
    }
  }
})

export const { setTheme } = theme.actions;

export default theme.reducer;