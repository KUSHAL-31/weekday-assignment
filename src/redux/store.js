import { configureStore } from '@reduxjs/toolkit';
import { jobReducer } from './reducers/jobReducer';

const store = configureStore({
    reducer: {
        jobDetails: jobReducer,
    },
});

export default store;