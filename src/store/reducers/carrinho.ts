import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'
//Action
type AcaoState = {
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: AcaoState = {
  carrinho: [],
  favoritos: []
}
//Reduce
const acaoSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.carrinho.find((p) => p.id === produto.id)) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.carrinho.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})
//Desestruturação para exportação
export const { adicionarAoCarrinho, favoritar } = acaoSlice.actions
export default acaoSlice.reducer
