import axios from "axios";
import { GET_JOBS_FAILURE, GET_JOBS_REQUEST, GET_JOBS_SUCCESS } from "../constants/jobConstants";

export const getAllJobs = () => {
    return async (dispatch) => {
        dispatch({ type: GET_JOBS_REQUEST });
        try {
            const body = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    offset: 0,
                    limit: 20,
                }),
            };
            const response = await axios.post(
                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                body
            );
            dispatch({ type: GET_JOBS_SUCCESS, payload: response.data });
        } catch (error) {
            console.log(error);
            dispatch({ type: GET_JOBS_FAILURE, payload: error });
        }
    };
}