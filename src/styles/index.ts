import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  padding: 40px;
`

export const Botao = styled.button`
  width: 100%;
  padding: 8px;
  color: #fff;
  background-color: green;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`
export const InputGeral = styled.input`
  display: flex;
  margin-bottom: 8px;
  width: 100%;
  border-radius: 4px;
  padding: 8px;
`

export default EstiloGlobal
