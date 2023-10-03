import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./reducers/carSlice.js";

const rootReducer = {
    cars:carsReducer
}

export const store = configureStore({
    reducer:rootReducer
});