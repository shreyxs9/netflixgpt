import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggle: false, 
    },
    reducers: {
        addGptToggle: (state, action) => {
        state.gptToggle = !state.gptToggle;
        },
    },
});

export const { addGptToggle} = gptSlice.actions;
export default gptSlice.reducer;