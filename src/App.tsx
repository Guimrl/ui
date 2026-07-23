import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme } from './theme'
import { Button } from './components/Button'

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div style={{ padding: 24, display: 'flex', gap: 16 }}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
