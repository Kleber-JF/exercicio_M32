import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { FormGeral, SubTitulo } from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import { Botao, InputGeral } from '../../styles'

const FormAdicionar = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    if (nome.split(' ').length > 1 && telefone.length > 11) {
      dispatch(
        cadastrar({
          nome,
          email,
          telefone
        })
      )
      setNome('')
      setEmail('')
      setTelefone('')
    } else {
      alert(
        'O nome precisa ser completo ou o telefone precisa ter no minimo 10 dígitos (incluindo o DDD)'
      )
    }
  }

  return (
    <>
      <FormGeral onSubmit={cadastrarContato}>
        <SubTitulo>Adicionar contatos:</SubTitulo>
        <InputGeral
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <InputGeral
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <InputGeral
          as={ReactInputMask}
          mask={'(99)99999-9999'}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          placeholder="Telefone"
          maskChar={''}
        />
        <Botao type="submit">Cadastrar</Botao>
      </FormGeral>
    </>
  )
}

export default FormAdicionar
