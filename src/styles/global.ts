import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::after,
  &::before {
    box-sizing: inherit;
  }
}

html {
  font-size: 62.5%;
  line-height: 1.15;
  
  -webkit-text-size-adjust: 100%;
}

body {
  background-image: url('https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg');
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 2rem;
  width: 100%;
  height: 100vh;

}

${({ theme }) => css`
  body,
  input,
  textarea,
  button {
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: ${theme.font.bold};
  }

  .react-modal-overlay {
    background-color: ${theme.colors.overlay};

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 600px;
    padding: 3rem 4rem;

    outline: none;
    box-shadow: 0px 6px 30px rgb(0, 0, 0, 0.4);
    border-radius: ${theme.spacings.borderRadius};
    background-color: ${theme.colors.popupBg};
  }
`}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`
