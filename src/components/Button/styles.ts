import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    margin-top: 1.6rem;
    padding: 0.08rem 2.6rem;

    border: none;
    border-radius: ${theme.spacings.borderRadius};

    transition: 0.3s;
    white-space: nowrap;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.lightBlue};

    span {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
    }

    &:focus {
      outline-width: 1px;
      outline-style: dashed;
      outline-color: ${theme.colors.blue};
    }

    &:hover {
      background-color: ${theme.colors.blue};
    }
  `}
`
