import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) => css`
    border: none;
    padding: 0.08rem 2.6rem;
    margin-top: 1.6rem;
    border-radius: 2.0rem;
    
    transition: 0.3s;
    white-space: nowrap;

    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    background-color: ${theme.colors.lightBlue};

    &:hover {
      background: ${theme.colors.blue};
    }
  `}
`
