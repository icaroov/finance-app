import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderModal = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.colors.borderColor};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Content = styled.main`
  ${({ theme }) => css`
    white-space: normal;
    margin: 2rem 0;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    line-height: 1.8em;
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      padding: 2rem 1.5rem;
      border-radius: 10px;
      font-size: ${theme.font.sizes.large};
      background-color: ${theme.colors.background};

      border: none;

      &:focus {
        outline-width: 1px;
        outline-style: dashed;
        outline-color: ${theme.colors.contentBg};
      }

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      &::placeholder {
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`

export const CloseButton = styled.button`
  ${({ theme }) => css`
    border: none;
    font-size: 0;

    transition: 0.3s;
    background-color: transparent;

    img {
      width: 2rem;
    }

    &:focus {
      outline-width: 1px;
      outline-style: dashed;
      outline-color: ${theme.colors.contentBg};
    }

    &:hover {
      opacity: 0.7;
    }
  `}
`
export const ButtonTypeContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    margin-bottom: 1rem;

    span {
      font-size: ${theme.font.sizes.medium};
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  `}
`

type RadioBoxProps = {
  isActive: boolean
  activeColor: 'green' | 'red'
}

export const RadioBox = styled.button<RadioBoxProps>`
  ${({ theme, isActive, activeColor }) => css`
    display: flex;
    align-items: center;

    border: 1px solid ${theme.colors.borderColor};

    padding: 1rem 2rem;
    border-radius: 10px;

    background-color: ${isActive
      ? transparentize(0.9, theme.colors[activeColor])
      : 'transparent'};

    transition: 0.3s;

    &:hover {
      background-color: ${theme.colors.overlay};
    }

    &:focus {
      outline-width: 1px;
      outline-style: dashed;
      outline-color: ${theme.colors.contentBg};
    }

    img {
      margin-right: 1rem;
    }
  `}
`
