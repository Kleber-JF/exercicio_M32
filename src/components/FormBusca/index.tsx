import { useDispatch, useSelector } from 'react-redux'
import { ContainerBusca, InputBusca } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const FormBusca = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <>
      <ContainerBusca>
        <InputBusca
          type="text"
          placeholder="Busca por nome"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
      </ContainerBusca>
    </>
  )
}

export default FormBusca
