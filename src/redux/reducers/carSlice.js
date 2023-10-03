import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name:'car',
    initialState:{
        loading:false,
        cars:[],
        error:false
    },
    reducers:{
        getCarsRequest:(state) => {
            state.loading = true;
        },
        getCarsSuccess:(state,{payload}) => {
            state.loading = false;
            state.cars = payload;
        },
        getCarsFailed:(state,{payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }

});

export const {getCarsRequest, getCarsSuccess, getCarsFailed} = carSlice.actions;
export default carSlice.reducer;