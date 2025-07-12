import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
  }

  body {
    background-color: #000000;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  p {
    line-height: 1.6;
  }
`
