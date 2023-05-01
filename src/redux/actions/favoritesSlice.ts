import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Result } from 'index'

interface stateFav {
    Result: Result[]
}

const initialState:stateFav = {
    Result:[]
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers:{
        setFavorites: (state, action:PayloadAction<Result>) => {
            const { id } = action.payload
            const existingMovie = state.Result.find(movie => movie.id === id)

            // si la peli ya exite en el array de Result no la agrego, la elimino
            if(existingMovie){
               const movieFilter = state.Result.filter( movie => movie.id !== existingMovie.id)
               state.Result = movieFilter;
            } else{
                state.Result.push(action.payload)
            }
        }
    }
})

export const { setFavorites } = favoritesSlice.actions
// state
export const moviesFav = (state: RootState) => state.states.favorites

export default favoritesSlice.reducer