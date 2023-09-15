import styled from 'styled-components'
import { Botao } from '../../styles'

export const TabelaData = styled.td`
  border: 1px solid #000;
  width: 100%;
  padding: 8px;
  text-align: center;
  white-space: nowrap;
`

export const TabelaBotao = styled(TabelaData)`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`

export const BotaoEditar = styled(Botao)`
  width: 45%;
  padding: 6px;
`

export const BotaoRemover = styled(Botao)`
  width: 45%;
  background-color: red;
  padding: 6px;
`

export const AreaEditar = styled.textarea`
  resize: none;
  text-align: center;
  border: none;
  background-color: transparent;
  color: #000;
  font-size: 16px;
  margin: auto;
  display: flex;
  height: 20px;
  font-weight: bold;
`
