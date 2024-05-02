import { createReducer } from "@reduxjs/toolkit";
import { GET_JOBS_REQUEST, GET_JOBS_SUCCESS, GET_JOBS_FAILURE } from "../constants/jobConstants";

const initialState = {
    jobs: [],
    totalCount: 0,
    error: null,
};

export const jobReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(GET_JOBS_REQUEST, (state, action) => {
            state.loading = true;
        })
        .addCase(GET_JOBS_SUCCESS, (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.jobs = action.payload.jdList;
            state.totalCount = action.payload.totalCount;
        })
        .addCase(GET_JOBS_FAILURE, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
});