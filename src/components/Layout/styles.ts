import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 75vw;
    max-width: ${theme.grid.container};
    height: 90vh;
    max-height: 80.6rem;

    display: flex;
    flex-direction: column;

    overflow: hidden;
    border-radius: 14px;
    backdrop-filter: blur(20px);

    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.background};

    main {
      flex: 1;
      padding: 2rem;
      overflow-y: scroll;
      background-color: ${theme.colors.background};

      ::-webkit-scrollbar {
        width: 6px;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.scroll};
        border-radius: 10px;
      }
    }
  `}
`
