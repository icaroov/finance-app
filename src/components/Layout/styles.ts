import styled, { css } from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background-color: ${theme.colors.background};
  `}
`
