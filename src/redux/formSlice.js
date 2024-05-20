import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        name: '',
        lastname: '',
        email: ''
    }
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        SET_FORM_DATA: (state, action) => {
            state.data = action.payload
        }
    },
})

export const {
    SET_FORM_DATA
} = formSlice.actions

export default formSlice.reducer