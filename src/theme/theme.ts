import { createTheme } from '@mui/material/styles'

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2E5CFF',
    },
    secondary: {
      main: '#00B3A4',
    },
    background: {
      default: '#F6F7FB',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Inter, "Hiragino Kaku Gothic ProN", "Noto Sans JP", system-ui, sans-serif',
    h1: { fontSize: '2rem', fontWeight: 700 },
    h2: { fontSize: '1.5rem', fontWeight: 700 },
    h3: { fontSize: '1.25rem', fontWeight: 700 },
  },
  shape: {
    borderRadius: 12,
  },
})
