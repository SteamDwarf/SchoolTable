import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";
import { api } from "./api";

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});