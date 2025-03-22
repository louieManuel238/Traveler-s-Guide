import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';


import App from './App.jsx'

  const color = teal[500];
  const theme = createTheme({
    palette: {
      primary: {
        main: color,
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
