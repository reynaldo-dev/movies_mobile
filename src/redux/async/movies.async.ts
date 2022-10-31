import { createAsyncThunk } from "@reduxjs/toolkit"
import { client } from "../../api/movies"
import { constants } from "../../constants"

export const getLatests = createAsyncThunk(
    'movies/latests',
    async () => {

        try {
            const { data } = await client.get(`${constants.baseUrl}/movie/latest?api_key=${constants.apiKey}`)

            return data ? data : {}
        } catch (error) {
            console.log(error)
        }

    }
)

export const getPopulars = createAsyncThunk(
    'movies/populars',
    async () => {

        try {
            const { data } = await client.get(`${constants.baseUrl}/movie/popular?api_key=${constants.apiKey}`)

            return data.results ? data.results : []
        } catch (error) {
            console.log(error)
        }

    }
)

export const getUpcoming = createAsyncThunk(
    'movies/upcoming',
    async () => {

        try {
            const { data } = await client.get(`${constants.baseUrl}/movie/upcoming?api_key=${constants.apiKey}`)

            return data.results ? data.results : []
        } catch (error) {
            console.log(error)
        }

    }
)

