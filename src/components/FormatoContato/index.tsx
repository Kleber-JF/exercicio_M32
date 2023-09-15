import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ContatoModel from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'
import * as S from './styles'

type Props = ContatoModel

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [editaNome, setEditaNome] = useState('')
  const [editaEmail, setEditaEmail] = useState('')
  const [editaTelefone, setEditaTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setEditaNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEditaEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setEditaTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelaEdicao() {
    setEditando(false)
    setEditaNome(nomeOriginal)
    setEditaEmail(emailOriginal)
    setEditaTelefone(telefoneOriginal)
  }

  return (
    <>
      <S.TabelaData>
        <S.AreaEditar
          disabled={!editando}
          value={editaNome}
          onChange={(evento) => setEditaNome(evento.target.value)}
        />
      </S.TabelaData>
      <S.TabelaData>
        <S.AreaEditar
          disabled={!editando}
          value={editaEmail}
          onChange={(evento) => setEditaEmail(evento.target.value)}
        />
      </S.TabelaData>
      <S.TabelaData>
        <S.AreaEditar
          disabled={!editando}
          value={editaTelefone}
          onChange={(evento) => setEditaTelefone(evento.target.value)}
        />
      </S.TabelaData>
      <S.TabelaBotao>
        {editando ? (
          <>
            <S.BotaoEditar
              onClick={() => {
                dispatch(
                  editar({
                    nome: editaNome,
                    telefone: editaTelefone,
                    email: editaEmail
                  })
                )
                setEditando(false)
              }}
            >
              <span className="material-symbols-outlined">done</span>
            </S.BotaoEditar>
            <S.BotaoRemover type="button" onClick={cancelaEdicao}>
              <span className="material-symbols-outlined">close</span>
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEditando(true)}>
              <span className="material-symbols-outlined">edit_square</span>
            </S.BotaoEditar>
            <S.BotaoRemover
              type="button"
              onClick={() => dispatch(remover(editaTelefone))}
            >
              <span className="material-symbols-outlined">delete</span>
            </S.BotaoRemover>
          </>
        )}
      </S.TabelaBotao>
    </>
  )
}

export default Contato
