import React, { useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  Chip
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const allergens = ['Peanuts', 'Tree Nuts', 'Milk', 'Eggs', 'Fish', 'Shellfish', 'Soy', 'Wheat'];

function AllergyPopup({ onClose }) {
  const [showAllergens, setShowAllergens] = useState(false);
  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const handleYes = () => {
    setShowAllergens(true);
  };

  const handleNo = () => {
    onClose();
  };

  const handleAllergenChange = (event) => {
    const allergen = event.target.name;
    setSelectedAllergens(prev =>
      event.target.checked
        ? [...prev, allergen]
        : prev.filter(a => a !== allergen)
    );
  };

  const handleSaveAllergens = () => {
    console.log('Selected allergens:', selectedAllergens);
    // Here you would typically save this information to your backend or local storage
    onClose();
  };

  return (
    <Dialog 
      open={true} 
      onClose={onClose}
      PaperProps={{
        style: {
          borderRadius: 16,
          padding: 16,
          maxWidth: 400,
        },
      }}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <WarningIcon color="warning" sx={{ mr: 1, fontSize: 28 }} />
          <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
            Food Allergies
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          We want to ensure your safety. Do you have any food allergies?
        </DialogContentText>
        {!showAllergens ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <Button onClick={handleYes} variant="contained" color="primary" size="large">
              Yes, I do
            </Button>
            <Button onClick={handleNo} variant="outlined" color="primary" size="large">
              No, I don't
            </Button>
          </Box>
        ) : (
          <>
            <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>
              Please select your allergies:
            </Typography>
            <FormGroup>
              {allergens.map(allergen => (
                <FormControlLabel
                  key={allergen}
                  control={
                    <Checkbox
                      checked={selectedAllergens.includes(allergen)}
                      onChange={handleAllergenChange}
                      name={allergen}
                    />
                  }
                  label={allergen}
                />
              ))}
            </FormGroup>
            <Box sx={{ mt: 2, mb: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>Selected Allergies:</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {selectedAllergens.map(allergen => (
                  <Chip key={allergen} label={allergen} color="primary" variant="outlined" />
                ))}
              </Box>
            </Box>
          </>
        )}
      </DialogContent>
      {showAllergens && (
        <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
          <Button onClick={handleSaveAllergens} variant="contained" color="primary" size="large">
            Save Allergies
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}

export default AllergyPopup;

