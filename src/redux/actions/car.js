import {
    getCarsFailed,
    getCarsRequest,
    getCarsSuccess
} from "../reducers/carSlice.js";
import axios from "axios";

export const getCarsDetails = () => async (dispatch) => {
    const relativeUrlPath = "/data.json"
    try {
        dispatch(getCarsRequest());
        const { data } = await axios.get(relativeUrlPath);
        dispatch(getCarsSuccess(data.cars))
    } catch (error) {
        dispatch(getCarsFailed(error))
        console.log(error);
    }
};
