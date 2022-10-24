import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#4459b5',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
