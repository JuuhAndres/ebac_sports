import { configureStore } from '@reduxjs/toolkit'
import acaoReducer from './reducers/carrinho'

import api from '../services/api'
//Store
export const store = configureStore({
  reducer: {
    //StoreReducer
    acao: acaoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
