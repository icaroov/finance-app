import styled, { css } from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-spacing: 0 0.5rem;

    /* thead,
    tbody {
      display: block;
    } */

    /* tbody {
      width: 50vw;
      margin: 0 auto;
      height: 500px;
      overflow-y: scroll;

      ::-webkit-scrollbar {
        width: 6px;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.scroll};
        border-radius: 10px;
      }
    } */
  `}
`

export const TableHead = styled.th`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  `}
`

export const TableRow = styled.tr`
  ${({ theme }) => css`
    transition: 0.3s;

    background-color: ${theme.colors.contentBg};
    border: 1px solid ${theme.colors.borderColor};
    font-weight: ${theme.font.light};

    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.background};
    }
  `}
`

export const TableData = styled.td`
  ${({ theme }) => css`
    padding: 1rem 2rem;
    white-space: nowrap;

    &.withdraw {
      color: ${theme.colors.red};
    }

    &.deposit {
      color: ${theme.colors.green};
    }

    border: solid 1px ${theme.colors.background};
    border-style: solid none;

    &:first-child {
      font-weight: ${theme.font.bold};
      border-left-style: solid;
      border-top-left-radius: ${theme.spacings.borderRadius};
      border-bottom-left-radius: ${theme.spacings.borderRadius};
    }

    &:last-child {
      border-right-style: solid;
      border-bottom-right-radius: ${theme.spacings.borderRadius};
      border-top-right-radius: ${theme.spacings.borderRadius};
    }
  `}
`
