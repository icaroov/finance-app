import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 3rem;
    white-space: nowrap;
    flex-shrink: 0;

    width: 100%;
    height: 4.5rem;

    border-bottom: 1px solid ${theme.colors.borderColor};
  `}
`

export const Circle = styled.div`
  width: 15px;
  height: 15px;

  margin-right: 2.5rem;
  flex-shrink: 0;

  border-radius: 50%;
  background-color: #f96057;
  box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
`

export const Menu = styled.div``

export const Logo = styled.img``
