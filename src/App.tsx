import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import DrawerComponent from './Drawer'
import Header from './Header'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <Header />
      </Container>
    </ThemeProvider>
  )
}

export default App
