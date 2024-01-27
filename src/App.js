import logo from './logo.svg'
import './App.css'
import Header from './components/header/Header'
import Feed from './components/feed/Feed'
import { ThemeProvider } from 'styled-components'
import theme from './theme/Theme'
import GlobalStyle from './theme/GlobalStyles'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Feed />
      </ThemeProvider>
    </div>
  )
}

export default App
