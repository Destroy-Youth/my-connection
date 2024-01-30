import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Feed from './components/feed/Feed'
import Header from './components/header/Header'
import { Logging } from './components/logging/Logging'
import GlobalStyle from './theme/GlobalStyles'
import theme from './theme/Theme'
import { useContext } from 'react'
import {
  UserContextProvider,
  userContext,
} from './components/context/UserContext'

const queryClient = new QueryClient()

function App() {
  const { user } = useContext(userContext)

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          {user ? (
            <>
              <Header />
              <Feed />
            </>
          ) : (
            <Logging />
          )}
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
