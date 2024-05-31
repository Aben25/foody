
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Container>
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Material-UI 
      </Typography>
      <Button variant="contained" color="primary">
        Let's Add
      </Button>
     
    </Box>
  </Container>
  );
}

export default App;
