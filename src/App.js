import './App.css'
import Header from './components/header/Header'
import Feed from './components/feed/Feed'
import { ThemeProvider } from 'styled-components'
import theme from './theme/Theme'
import GlobalStyle from './theme/GlobalStyles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Header />
          <Feed />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
