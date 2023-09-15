import { Provider } from 'react-redux'
import Cabecalho from './containers/Cabecalho'
import ListaContato from './containers/ListaContato'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import FormAdicionar from './components/FormCadastro'
import FormBusca from './components/FormBusca'

function App() {
  return (
    <>
      <Provider store={store}>
        <EstiloGlobal />
        <Cabecalho />
        <Container>
          <FormAdicionar />
        </Container>
        <FormBusca />
        <Container>
          <ListaContato />
        </Container>
      </Provider>
    </>
  )
}

export default App
