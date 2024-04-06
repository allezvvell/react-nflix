import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsLogin(state){
            state.isLogin = true
        }
    }
})


export const { setIsLogin } = mainSlice.actions;
export default mainSlice.reducer