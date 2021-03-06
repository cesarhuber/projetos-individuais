
import { createGlobalStyle } from 'styled-components'
import {Router} from './route/Route'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
  }
`

function App() {

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
