import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    width: calc(33.3% - 2rem);
    max-height: 12rem;
    transition: 0.3s ease;

    border-radius: 14px;
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.background};
    background-color: ${theme.colors.contentBg};

    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      background-color: ${theme.colors.background};
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.colors.borderColor};
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
  `}
`

export const Icon = styled.img``

export const Money = styled.span`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.green};
  `}
`
