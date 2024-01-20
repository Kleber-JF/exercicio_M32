import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  contatos: Contato[]
}

const initialState: ContatoState = {
  contatos: []
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoNomeExiste = state.contatos.find(
        (contato) => contato.nome === action.payload.nome
      )
      const contatoEmailExiste = state.contatos.find(
        (contato) => contato.email === action.payload.email
      )
      const contatoTelefoneExiste = state.contatos.find(
        (contato) => contato.telefone === action.payload.telefone
      )
      if (contatoNomeExiste || contatoTelefoneExiste || contatoEmailExiste) {
        alert('Este nome, e-mail ou telefone já existe')
      } else {
        state.contatos.push(action.payload)
        state.contatos.sort(function (x, y) {
          const a = x.nome.toUpperCase()
          const b = y.nome.toUpperCase()
          return a == b ? 0 : a > b ? 1 : -1
        })
      }
    },
    remover: (state, action: PayloadAction<string>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.telefone !== action.payload
      )
      state.contatos.sort(function (x, y) {
        const a = x.nome.toUpperCase()
        const b = y.nome.toUpperCase()
        return a == b ? 0 : a > b ? 1 : -1
      })
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.contatos.findIndex(
        (t) => t.telefone === action.payload.telefone
      )
      if (indexContato >= 0) {
        state.contatos[indexContato] = action.payload
      }
      state.contatos.sort(function (x, y) {
        const a = x.nome.toUpperCase()
        const b = y.nome.toUpperCase()
        return a == b ? 0 : a > b ? 1 : -1
      })
    }
  }
})

export const { cadastrar, remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
