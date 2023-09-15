import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import Contato from '../../components/FormatoContato'

const ListaContato = () => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const { contatos } = useSelector((state: RootReducer) => state.contatos)
  const filtraContatos = () => {
    let contatosFiltrados = contatos
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (contato) => contato.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return contatos
    }
  }
  const contacts = filtraContatos()
  return (
    <S.TabelaLista>
      <thead>
        <tr>
          <S.TabelaTitulo>Nome</S.TabelaTitulo>
          <S.TabelaTitulo>E-mail</S.TabelaTitulo>
          <S.TabelaTitulo>Telefone</S.TabelaTitulo>
          <S.TabelaTitulo>Editar/Remover</S.TabelaTitulo>
        </tr>
      </thead>
      <tbody>
        {contacts.map((t) => (
          <tr key={t.telefone}>
            <Contato nome={t.nome} email={t.email} telefone={t.telefone} />
          </tr>
        ))}
      </tbody>
    </S.TabelaLista>
  )
}

export default ListaContato
