import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginHecho: false,
};

export const LoginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        iniciarSesion: (state) => {
            state.loginHecho = true
        },
        cerrarSesion: (state) => {
            state.loginHecho = false
        },
    },
})

export const { iniciarSesion , cerrarSesion } = LoginReducer.actions

export default LoginReducer.reducer