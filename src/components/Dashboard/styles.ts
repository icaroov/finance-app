import styled from 'styled-components'

export const Container = styled.div``

export const CardWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
`