import { useState } from 'react'
import ReactModal from 'react-modal'

import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import closeIcon from '../../assets/close.svg'

import { useModal } from '../../hooks/useModal'
import Button from '../Button'

import * as Styled from './styles'

type ButtonType = 'deposit' | 'withdraw'

// accessiblity
ReactModal.setAppElement('#root')

const Modal = () => {
  const [type, setType] = useState<ButtonType>('deposit')

  const { open, handleCloseModal } = useModal()

  function handleChangeType(handleType: ButtonType) {
    setType(handleType)
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
          <Styled.Title>Modal</Styled.Title>

          <Styled.CloseButton onClick={handleCloseModal}>
            <img src={closeIcon} alt='close modal' />
          </Styled.CloseButton>
        </Styled.HeaderModal>

        <Styled.Content>
          <Styled.Form>
            <input type='text' placeholder='Título' />
            <input type='number' placeholder='Valor' />

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

            <input type='text' placeholder='Categoria' />
          </Styled.Form>
        </Styled.Content>

        <Button type='submit'>Cadastrar</Button>
      </Styled.Container>
    </ReactModal>
  )
}

export default Modal
