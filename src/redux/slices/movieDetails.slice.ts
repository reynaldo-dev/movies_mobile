import { createSlice } from "@reduxjs/toolkit"
import { getCredits, getRecommended } from "../async/movie.async"

const initialState={
    recomendations : [],
    cast :[]
}
export const movieData = createSlice({
    name: 'movieData',
    initialState,
    reducers: {
      
    },
  
    extraReducers(builder) {
      builder
        .addCase(getRecommended.fulfilled, (state, {payload}) => {
         state.recomendations = [...payload]
        })

        .addCase(getCredits.fulfilled, (state, {payload}) => {
            state.cast = [...payload]
           })
        
      
    }
  })
  

  export default movieData.reducer