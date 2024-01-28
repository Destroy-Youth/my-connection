import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
  }

  h1 {
    margin: 0;
  }

  svg {
    fill: gray;
  }

  p {
    margin: 0;
  }
`
export default GlobalStyle
