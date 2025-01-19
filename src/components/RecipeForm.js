import React, { useState } from 'react';
import { 
  Button, 
  TextField, 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Snackbar, 
  IconButton,
  InputAdornment
} from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AddIcon from '@mui/icons-material/Add';
import TimerIcon from '@mui/icons-material/Timer';
import GroupIcon from '@mui/icons-material/Group';

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    name: '',
    prepTime: '',
    servings: '',
    ingredients: '',
    instructions: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe submitted:', recipe);
    setSnackbarOpen(true);
    // Here you would typically send the data to your backend
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 800, width: '100%', mx: 'auto', p: 4, borderRadius: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <RestaurantMenuIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          Create Your Recipe
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Recipe Name"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              required
              variant="outlined"
              placeholder="e.g., Grandma's Apple Pie"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Prep Time"
              id="prepTime"
              name="prepTime"
              value={recipe.prepTime}
              onChange={handleChange}
              required
              variant="outlined"
              placeholder="e.g., 30 minutes"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TimerIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Servings"
              id="servings"
              name="servings"
              value={recipe.servings}
              onChange={handleChange}
              required
              variant="outlined"
              placeholder="e.g., 4"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GroupIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Ingredients"
              id="ingredients"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              required
              variant="outlined"
              multiline
              rows={4}
              placeholder="List your ingredients, one per line"
              helperText="Tip: Include quantities for each ingredient"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Instructions"
              id="instructions"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              required
              variant="outlined"
              multiline
              rows={6}
              placeholder="Describe the steps to prepare your recipe"
              helperText="Tip: Number your steps for clarity"
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              size="large"
              startIcon={<AddIcon />}
              sx={{ py: 1.5, fontSize: '1.1rem' }}
            >
              Create Recipe
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Recipe submitted successfully!"
      />
    </Paper>
  );
}

export default RecipeForm;

