import { createAsyncThunk } from "@reduxjs/toolkit"
import { client } from "../../api/movies"
import { constants } from "../../constants"

export const getRecommended = createAsyncThunk(
    'movies/upcoming',
    async (movieId : number | string) => {
        try {
            const { data } = await client.get(`${constants.baseUrl}/movie/${movieId}/recommendations?api_key=${constants.apiKey}`)
           return data.results ? data.results : []
        } catch (error) {
            console.log(error)
        }

    }
)

export const getCredits = createAsyncThunk(
    'movies/credits',
    async (movieId : number | string) => {
        try {
            const { data } = await client.get(`${constants.baseUrl}/movie/${movieId}/credits?api_key=${constants.apiKey}`)
            
           return data.cast ? data.cast : []
        } catch (error) {
            console.log(error)
        }

    }
)