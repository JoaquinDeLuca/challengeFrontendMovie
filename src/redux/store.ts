import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { movieApi } from 'src/redux/services/movieApi';
import movieSlice from 'src/redux/actions/movieDetailsSlice';
import favoritesSlice from './actions/favoritesSlice';

const createNoopStorage = () => {
   return {
      getItem(_key: any) {
         return Promise.resolve(null);
      },
      setItem(_key: any, value: any) {
         return Promise.resolve(value);
      },
      removeItem(_key: any) {
         return Promise.resolve();
      },
   };
};
const sessionStorage = typeof window !== 'undefined' ? createWebStorage('session') : createNoopStorage();

// configuración del tipo de storage y su clave
const persistConfig = {
   key: 'root',
   storage: sessionStorage,
}
// Combino los reducers en un solo lugar y así no tengo que declarar uno por uno en la configureStore
const rootReducers = combineReducers({
   movies: movieSlice,
   favorites: favoritesSlice
})

//Paso la configuracion de la pesistencia y los reducers que quiero que sean persitentes
const persistedReducers = persistReducer(persistConfig, rootReducers)


export const store = configureStore({
   reducer: {
      [movieApi.reducerPath]: movieApi.reducer,

      states: persistedReducers
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      })
      .concat(movieApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch