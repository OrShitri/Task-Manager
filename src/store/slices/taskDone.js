import { createSlice } from "@reduxjs/toolkit";

export const updateUlStyle = createSlice({
    name: 'marker',
    initialState: {
        styles: {}
    },
    reducers: {
        toggleDoneStyle: (state, action) => {
            const { taskId, style } = action.payload;
            state.styles[taskId] = style;
        }
    }
})

export const { toggleDoneStyle } = updateUlStyle.actions

export default updateUlStyle.reducer
