import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RecipeForm from './components/RecipeForm';
import AllergyPopup from './components/AllergyPopup';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b6b', // A vibrant red
    },
    secondary: {
      main: '#4ecdc4', // A fresh teal
    },
    background: {
      default: '#f7f7f7',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

function App() {
  const [showAllergyPopup, setShowAllergyPopup] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ minHeight: '100vh', backgroundColor: '#f7f7f7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {showAllergyPopup && <AllergyPopup onClose={() => setShowAllergyPopup(false)} />}
          <Routes>
            <Route path="/recipe-form" element={<RecipeForm />} />
            <Route path="*" element={<Navigate to="/recipe-form" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

