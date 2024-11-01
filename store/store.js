
import { configureStore } from "@reduxjs/toolkit";
import { userWalaSlice } from "./slices/user";

export let meraStore=configureStore({
    reducer: userWalaSlice.reducer
});