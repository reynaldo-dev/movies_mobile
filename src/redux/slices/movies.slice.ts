import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getLatests, getPopulars, getUpcoming } from '../async/movies.async';

//latest
export interface RootObjectLatest {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: any;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  any[];
    production_countries:  any[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
   }
   
   export interface Genre {
    id:   number;
    name: string;
   }
   
   export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
   }

// populars
export interface RootObjectPopular {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
   }
   
   export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
   }
   
   export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
    Te = "te",
   }
   

interface IMovies {
    latests : Result[],
    populars : Result[],
    upcomings : Result[],
}

const initialState: IMovies = {
  latests: [],
  populars: [],
  upcomings: [],
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    
  },

  extraReducers(builder) {
    builder
      .addCase(getLatests.fulfilled, (state, {payload}) => {
       state.latests = [payload]
      })
      .addCase(getPopulars.fulfilled, (state, {payload}) => {
        state.populars = [...payload]
       })

       .addCase(getUpcoming.fulfilled, (state, {payload}) => {
        state.upcomings = [...payload]
       })
    
  }
})


//export const {  } = counterSlice.actions

export default moviesSlice.reducer