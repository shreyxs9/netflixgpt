import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies:null,
        trailerVideos:null,
        nowPopularMovies:null,
        nowTopRatedMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addNowPopularMovies:(state, action)=>{
            state.nowPopularMovies = action.payload;
        },
        addNowTopRatedMovies:(state, action)=>{
            state.nowTopRatedMovies = action.payload;
        },
        addTrailerVideos:(state, action)=>{
            state.trailerVideos = action.payload;
        },
    },

});

export const {addNowPlayingMovies,addNowPopularMovies,addNowTopRatedMovies,addTrailerVideos} = moviesSlice.actions;
export default moviesSlice.reducer;