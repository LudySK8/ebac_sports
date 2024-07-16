import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const produtoExistente = state.itens.find((p) => p.id === produto.id)
      if (produtoExistente) {
        alert('Item já adicionado')
      } else {
        state.itens = [...state.itens, produto]
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
