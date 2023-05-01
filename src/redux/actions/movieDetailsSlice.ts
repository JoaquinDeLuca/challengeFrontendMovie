import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Result, commentState, movieResponse } from 'index'


const initialState: movieResponse = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const movieDetails = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<movieResponse>) => {
            const {page,results,total_pages,total_results} = action.payload;

            // Acá actualizó estado inicial que tenía por nuevo, que llega por el action.payload
            state.page = page,
            state.results = results,
            state.total_pages = total_pages,
            state.total_results = total_results
        },
        setOneMovie: (state, action:PayloadAction<Result>) => {
            //A partir del estado que tengo, busco por ID la pelicula que me llega por el payload 
            const findMovie = state.results.find( movie =>  movie.id === action.payload.id)

            //Si la encuentra solamente retorno el estado pero sino la encuentra, la agreo al estado
            if(findMovie){
                return state;
            } else{
                state.results.push(action.payload)
            }
        }, 
        setCommentMovie: (state, action:PayloadAction<commentState>) => {
            const {idMovie, comments, nameUser} = action.payload
            // A partir del ID de la peli que llega por el payload, hago una búsqueda para saber a qué peli 
            // le tengo que agregar ese comentario
            const movie = state.results.find(movie => movie.id === idMovie);

            // Entonces si la encuentra agrego ese comentario y el nombre del usuario
            if(movie){
                movie.nameUser = nameUser
                movie.comment = comments
            }
        }
    },
})

export const { setMovies, setOneMovie, setCommentMovie } = movieDetails.actions

export const selectState = (state: RootState) => state.states.movies

export default movieDetails.reducer