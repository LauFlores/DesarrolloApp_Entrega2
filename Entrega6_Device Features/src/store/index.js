import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../features/LoginReducer'


const store = configureStore({
    reducer: {
        login: LoginReducer,
    },
});



export default store