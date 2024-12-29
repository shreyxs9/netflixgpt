import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggle: false,
        gptrecommendations:null,
        gptMovies:null,
    },
    reducers: {
        addGptToggle: (state, action) => {
        state.gptToggle = !state.gptToggle;
        },
        addGptMoviesRecommendation: (state, action) =>{
            const{movieNames,movieResults} = action.payload;
            state.gptRecommendation = movieNames;
            state.gptMovies= movieResults;
        },
    },
});

export const { addGptToggle,addGptMoviesRecommendation} = gptSlice.actions;
export default gptSlice.reducer;