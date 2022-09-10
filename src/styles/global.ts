import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    user-select: none;
  }

  body {
    background-color: #001019;
    font-size: 14px;
    color: #f5f5f5;
    font-family: 'Nunito', sans-serif;

    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background: #07111c;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #999;
  }

  h1, h2, h3, h4, h5, button {
    font-family: 'Roboto', sans-serif;
  }

  a {
    all: unset;
  }
`