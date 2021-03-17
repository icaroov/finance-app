import { useState } from 'react'
import ReactModal from 'react-modal'

import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import closeIcon from '../../assets/close.svg'

import { useModal } from '../../hooks/useModal'
import api from '../../services/api'
import Button from '../Button'

import * as Styled from './styles'

type ButtonType = 'deposit' | 'withdraw'

// accessiblity
ReactModal.setAppElement('#root')

const Modal = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState<ButtonType>('deposit')

  const { open, handleCloseModal } = useModal()

  function handleChangeType(handleType: ButtonType) {
    setType(handleType)
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type,
    }

    try {
      api.post('/transactions', data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={handleCloseModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Styled.Container>
        <Styled.HeaderModal>
          <Styled.Title>Cadastrar Transação</Styled.Title>

          <Styled.CloseButton onClick={handleCloseModal}>
            <img src={closeIcon} alt='close modal' />
          </Styled.CloseButton>
        </Styled.HeaderModal>

        <Styled.Content>
          <Styled.Form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Título'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              type='number'
              placeholder='Valor'
              value={value}
              onChange={(event) => setValue(Number(event.target.value))}
            />

            <Styled.ButtonTypeContainer>
              <Styled.RadioBox
                type='button'
                onClick={() => handleChangeType('deposit')}
                isActive={type === 'deposit'}
                activeColor='green'
              >
                <img src={incomeIcon} alt='income' />
                <span>Entrada</span>
              </Styled.RadioBox>

              <Styled.RadioBox
                type='button'
                onClick={() => handleChangeType('withdraw')}
                isActive={type === 'withdraw'}
                activeColor='red'
              >
                <img src={outcomeIcon} alt='outcome' />
                <span>Saída</span>
              </Styled.RadioBox>
            </Styled.ButtonTypeContainer>

            <input
              type='text'
              placeholder='Categoria'
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
            <Button type='submit'>Cadastrar</Button>
          </Styled.Form>
        </Styled.Content>
      </Styled.Container>
    </ReactModal>
  )
}

export default Modal
